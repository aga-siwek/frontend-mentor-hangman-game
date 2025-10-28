import styles from "./Summary.module.css"
import Button from "../../common/buttons/Button.jsx";
import {GAME_RESULT} from "../../../store/gameSlice.js";

function Summary({onPlayAgain, onNewCategory, onQuitGame, gameResult, category}) {
    const checkWin = () => {
        if (gameResult === GAME_RESULT.WIN) {
            return "You Win"
        }
        return "You Lose"
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.summary_container}>
                    <div className={styles.header}>
                        <h2 className={styles.header_text}>{checkWin()}</h2>
                    </div>
                    <div className={styles.buttons}>
                        <Button color="blue" text="PLAY AGAIN" size="big" onClick={() => onPlayAgain()}/>
                        <Button color="blue" text="NEW CATEGORY" size="big" onClick={() => onNewCategory()}/>
                        <Button color="gradient" text="QUIT GAME" size="big" onClick={() => onQuitGame()}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;