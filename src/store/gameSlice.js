import {createSlice} from '@reduxjs/toolkit'
import passwords from "../data.json"
import category from "../components/category/Category.jsx";

export const GAME_STATE = {
    WELCOME: "welcome",
    HOW_TO_PLAY: "how_to_play",
    CATEGORY: "category",
    GAME: "game",
    SUMMARY: "summary",
    PAUSE: "pause"
}
export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        value: 0,
        gameState: GAME_STATE.WELCOME,
        category: null,
        selectPassword: null,
    },

    reducers: {
        goToHowToPlay: (state, action) => {
            state.value += action.payload
            state.gameState = GAME_STATE.HOW_TO_PLAY
        },
        exitGame: (state, action) => {
            state.gameState = GAME_STATE.WELCOME
        },
        goToCategory: (state, action) => {
            state.gameState = GAME_STATE.CATEGORY
        },
        startGame: (state, action) => {
            state.gameState = GAME_STATE.GAME
            state.category = action.payload
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
                continue}
            console.log(state.category)
            console.log(categoryPasswords)
            console.log(categoryPasswords.length)
            console.log(randomChoose(categoryPasswords));

        },
        selectLetter: (state, action) => {
        },
        finishGame: (state, action) => {
            state.gameState = GAME_STATE.SUMMARY
        },
        pauseGame: (state, action) => {
            state.gameState = GAME_STATE.PAUSE
        },
        continueGame: (state, action) => {
            state.gameState = GAME_STATE.GAME
        }


    },
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
    continueGame
} = gameSlice.actions

export default gameSlice.reducer