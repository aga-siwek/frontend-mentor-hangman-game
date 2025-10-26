import styles from "./MainGame.module.css"
import Header from "./header/Header.jsx";
import Password from "./password/Password.jsx";
import Letters from "./letters/Letters.jsx";
import {
    continueGame,
    exitGame,
    GAME_STATE,
    goToCategory,
    pauseGame,
    selectLetter,
    startGame
} from "../../store/gameSlice.js";
import {useSelector, useDispatch} from 'react-redux'
import Pause from "./pause/Pause.jsx";
import Summary from "./summary/Summary.jsx";

function MainGame() {
    const gameState = useSelector((state) => state.game.gameState)
    const selectedPassword = useSelector((state) => state.game.selectPassword)
    const selectedLetters = useSelector((state) => state.game.selectedLetters)
    const category = useSelector((state) => state.game.category)
    const life = useSelector((state) => state.game.life)
    const gameResult = useSelector((state) => state.game.gameResult)

    const dispatch = useDispatch()
    const onPauseGame = () => {
        dispatch(pauseGame())
    }
    const onContinueGame = () => {
        dispatch(continueGame())
    }
    const onPlayAgain = (chosenCategory) => {
        dispatch(startGame(chosenCategory))
    }
    const onNewCategory = () => {
        dispatch(goToCategory())
    }
    const onQuitGame = () => {
        dispatch(exitGame())
    }
    const clickLetter = (letter) => {
        console.log("clickLetter start", letter)
        dispatch(selectLetter(letter))
    }

    return (
        <div className={styles.main_game_container}>
            <Header onClick={onPauseGame} category={category} life={life}/>
            <div className={styles.main_game}>
                <Password password={selectedPassword} selectedLetters={selectedLetters}/>
                <Letters clickLetter={clickLetter} selectedLetters={selectedLetters}/>
            </div>
            {gameState === GAME_STATE.PAUSE &&
                <Pause onContinueGame={onContinueGame} onNewCategory={onNewCategory} onQuitGame={onQuitGame}/>}
            {gameState === GAME_STATE.SUMMARY &&
                <Summary onPlayAgain={onPlayAgain} onNewCategory={onNewCategory} onQuitGame={onQuitGame}
                         gameResult={gameResult} category={category}/>}
        </div>
    )
}

export default MainGame;