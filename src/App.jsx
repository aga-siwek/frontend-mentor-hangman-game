import './App.css'
import Welcome from "./components/welcome/Welcome.jsx"
import MainGame from "./components/main_game/MainGame.jsx";
import Category from "./components/category/Category.jsx";
import HowToPlay from "./components/how_to_play/HowToPlay.jsx";
import {useSelector, useDispatch} from 'react-redux'
import {GAME_STATE} from "./store/gameSlice.js";

function App() {
    const gameState = useSelector((state) => state.game.gameState)

    return (
        <div className="main_game_container">
            {gameState === GAME_STATE.WELCOME && <Welcome/>}
            {gameState === GAME_STATE.CATEGORY && <Category/>}
            {gameState === GAME_STATE.HOW_TO_PLAY && <HowToPlay/>}
            {gameState !== GAME_STATE.WELCOME
                && gameState !== GAME_STATE.CATEGORY
                && gameState !== GAME_STATE.HOW_TO_PLAY
                && <MainGame/>}
        </div>
    )
}


export default App
