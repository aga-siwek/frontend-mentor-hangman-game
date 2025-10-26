import {createListenerMiddleware, createSlice, isAnyOf, current} from '@reduxjs/toolkit'
import passwords from "../data.json"

export const GAME_STATE = {
    WELCOME: "welcome",
    HOW_TO_PLAY: "how_to_play",
    CATEGORY: "category",
    GAME: "game",
    SUMMARY: "summary",
    PAUSE: "pause"
}
export const GAME_RESULT = {
    WIN: "win",
    LOSE: "lose"
}
export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        gameState: GAME_STATE.WELCOME,
        category: null,
        selectPassword: null,
        selectedLetters: [],
        life: 6,
        gameResult: null
    },

    reducers: {
        goToHowToPlay: (state, action) => {
            state.gameState = GAME_STATE.HOW_TO_PLAY
        },
        exitGame: (state, action) => {
            state.gameState = GAME_STATE.WELCOME
            state.selectPassword = null
            state.category = null

        },
        goToCategory: (state, action) => {
            state.gameState = GAME_STATE.CATEGORY
        },
        startGame: (state, action) => {
            state.gameState = GAME_STATE.GAME
            state.category = action.payload
            state.selectedLetters = []
            state.life = 6;
            state.gameResult = null
            const categoryPasswords = passwords["categories"][state.category]
            const randomChoose = (arr) => {
                if (arr.length === 0) return null;
                const index = Math.floor(Math.random() * arr.length);
                return arr[index];
            };
            while (true) {
                let randomPassoword = randomChoose(categoryPasswords)
                if (!randomPassoword["selected"]) {
                    state.selectPassword = randomPassoword["name"];
                    randomPassoword["selected"] = true
                    return
                }
                continue
            }

        },
        selectLetter: (state, action) => {
            if (state.selectedLetters.includes(action.payload)) {
                return
            }
            state.selectedLetters = [...state.selectedLetters, action.payload]
        },
        finishGame: (state) => {
            state.gameState = GAME_STATE.SUMMARY
        },
        pauseGame: (state) => {
            state.gameState = GAME_STATE.PAUSE
        },
        continueGame: (state) => {
            state.gameState = GAME_STATE.GAME
        },
        removeLife: (state) => {
            state.life -= 1
        },

        changeGameResult: (state, action) => {
            state.gameResult = action.payload
            console.log("game result", state.gameResult)
        },
        checkIsWin: (state) => {
            const alphabet = [
                "A", "B", "C", "D", "E", "F", "G",
                "H", "I", "J", "K", "L", "M", "N",
                "O", "P", "Q", "R", "S", "T", "U",
                "V", "W", "X", "Y", "Z"
            ]
            if (state.selectPassword) {
                const letterSet = new Set(state.selectPassword
                    .toUpperCase().split("")
                    .filter(letter => alphabet.includes(letter)))
                const isWin = Array
                    .from(letterSet)
                    .every(letter => state.selectedLetters.includes(letter))
                if (isWin) {
                    state.gameResult = GAME_RESULT.WIN
                }
            }
        }
    },
})

export const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
    matcher: isAnyOf(gameSlice.actions.selectLetter),
    effect: (action, listenerApi) => {
        const state = listenerApi.getState().game
        if (state.selectPassword
            .toUpperCase()
            .split("")
            .includes(state.selectedLetters[state.selectedLetters.length - 1])) {
            return;
        }
        listenerApi.dispatch(removeLife())
    }
})

listenerMiddleware.startListening({
    matcher: isAnyOf(gameSlice.actions.selectLetter),
    effect: (action, listenerApi) => {
        listenerApi.dispatch(checkIsWin())
    }
})

listenerMiddleware.startListening({
    matcher: isAnyOf(gameSlice.actions.selectLetter),
    effect: (action, listenerApi) => {
        const state = listenerApi.getState().game
        if (state.gameResult === GAME_RESULT.WIN) {
            listenerApi.dispatch(finishGame())
            return
        }
        else {
            if(state.life === 0) {
                listenerApi.dispatch(changeGameResult(GAME_RESULT.LOSE))
                listenerApi.dispatch(finishGame())

            }
        }

    }
})

// Action creators are generated for each case reducer function
export const {
    goToHowToPlay,
    exitGame,
    goToCategory,
    startGame,
    selectLetter,
    finishGame,
    pauseGame,
    continueGame,
    removeLife,
    changeGameResult,
    checkIsWin
} = gameSlice.actions

export default gameSlice.reducer