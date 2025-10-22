import styles from "./MainGame.module.css"
import Header from "./header/Header.jsx";
import Password from "./password/Password.jsx";
import Letters from "./letters/Letters.jsx";
import {continueGame, exitGame, GAME_STATE, goToCategory, pauseGame, startGame} from "../../store/gameSlice.js";
import {useSelector, useDispatch} from 'react-redux'
import Pause from "./pause/Pause.jsx";
import Summary from "./summary/Summary.jsx";

function MainGame() {
    const gameState = useSelector((state) => state.game.gameState)
    const selectedPassword =  useSelector((state) => state.game.selectPassword)
    const dispatch = useDispatch()
    const onPauseGame = () => {
        dispatch(pauseGame())
    }
    const onContinueGame = () => {
        dispatch(continueGame())
    }
    const onPlayAgain = () => {
        dispatch(startGame())
    }
    const onNewCategory = () => {
        dispatch(goToCategory())
    }
    const onQuitGame = () => {
        dispatch(exitGame())
    }


    return (
        <div className={styles.main_game_container}>
            <Header onClick={onPauseGame}/>
            <div className={styles.main_game}>
                <Password password={selectedPassword}/>
                <Letters/>
            </div>
            {gameState === GAME_STATE.PAUSE &&
                <Pause onContinueGame={onContinueGame} onNewCategory={onNewCategory} onQuitGame={onQuitGame}/>}
            {gameState === GAME_STATE.SUMMARY &&
                <Summary onPlayAgain={onPlayAgain} onNewCategory={onNewCategory} onQuitGame={onQuitGame}/>}

        </div>
    )
}

export default MainGame;