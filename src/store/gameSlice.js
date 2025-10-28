import {createListenerMiddleware, createSlice, isAnyOf} from '@reduxjs/toolkit'
import passwords from "../data.json"

export const GAME_STATE = {
    WELCOME: "welcome",
    HOW_TO_PLAY: "how_to_play",
    CATEGORY: "category",
    GAME: "game",
    FLASH: "flash",
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
        goToHowToPlay: (state) => {
            state.gameState = GAME_STATE.HOW_TO_PLAY
        },
        exitGame: (state) => {
            state.gameState = GAME_STATE.WELCOME
            state.selectPassword = null
            state.category = null
            state.selectedLetters = []
            state.life = 6;
            state.gameResult = null
        },
        goToCategory: (state) => {
            state.gameState = GAME_STATE.CATEGORY
        },
        startGame: (state, action) => {
            state.gameState = GAME_STATE.GAME
            state.category = action.payload
            state.selectedLetters = []
            state.life = 6;
            state.gameResult = null
            const categoryPasswords = passwordsData["categories"][state.category]

            // random choose password and delete it from passwords list

            const randomIndex = randomChoose(categoryPasswords)
            const randomPassword = passwordsData["categories"][state.category][randomIndex]
                state.selectPassword = randomPassword["name"].toUpperCase();
                passwordsData.categories[state.category].splice(randomIndex, 1);
        },
        selectLetter: (state, action) => {
            state.selectedLetters = [...state.selectedLetters, action.payload]
        },
        finishGame: (state, action) => {
            state.gameResult = action.payload;
            state.gameState = GAME_STATE.FLASH
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
        showSummary(state) {
            state.gameState = GAME_STATE.SUMMARY
        }
    },
})
const passwordsData = {...passwords};
const ALPHABET = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
]

const randomChoose = (arr) => {
    if (arr.length === 0) return null;
    const index = Math.floor(Math.random() * arr.length);
    return index;
};

const isLetterInWord = (word, letter) => word.toUpperCase().includes(letter)

const isWordComplete = (word, selectedLetters) => {
    const letterSet = new Set(word
        .toUpperCase().split("")
        .filter(letter => ALPHABET.includes(letter)))

    const isComplete = Array
        .from(letterSet)
        .every(letter => selectedLetters.includes(letter))

    return isComplete
}

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    matcher: isAnyOf(gameSlice.actions.selectLetter),
    effect: (action, listenerApi) => {
        const state = listenerApi.getState().game
        const lastLetter = state.selectedLetters[state.selectedLetters.length - 1]

        // check if a letter is not in the word
        if (!isLetterInWord(state.selectPassword, lastLetter)) {
            listenerApi.dispatch(removeLife())
        }

        // check if the word is complete
        if (isLetterInWord(state.selectPassword, lastLetter) && isWordComplete(state.selectPassword, state.selectedLetters)) {
            listenerApi.dispatch(finishGame(GAME_RESULT.WIN))
        }
    }
})

listenerMiddleware.startListening({
    matcher: isAnyOf(gameSlice.actions.removeLife),
    effect: (action, listenerApi) => {
        const state = listenerApi.getState().game

        if (state.life === 0) {
            listenerApi.dispatch(finishGame(GAME_RESULT.LOSE))
        }
    }
})

listenerMiddleware.startListening({
    matcher: isAnyOf(gameSlice.actions.finishGame),
    effect: (action, listenerApi) => {
            setTimeout(() => {
                listenerApi.dispatch(showSummary());
            }, 2000)
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
    showSummary
} = gameSlice.actions

export default gameSlice.reducer
