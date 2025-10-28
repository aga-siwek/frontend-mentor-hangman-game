import styles from "./Pause.module.css"
import Button from "../../common/buttons/Button.jsx";

function Pause({onContinueGame, onNewCategory, onQuitGame}) {

    return (
        <div className={styles.container}>
            <div className={styles.pause_container}>
                <div className={styles.header}>
                    <h2 className={styles.header_text}>Paused</h2>
                </div>
                <div className={styles.buttons}>
                    <Button
                        color="blue"
                        text="CONTINUE"
                        onClick={() => onContinueGame()}/>
                    <Button
                        color="blue"
                        text="NEW CATEGORY"
                        onClick={() => onNewCategory()}/>
                    <Button
                        color="gradient"
                        text="QUIT GAME"
                        onClick={() => onQuitGame()}/>
                </div>
            </div>
        </div>
    )
}

export default Pause;