import styles from "./LetterBox.module.css"

function LetterBox({letter, active=false, onClick=null}) {

    const showLetterStatus = () => {
        if (active) {
            return (styles.active_letter)
        }
        else if (!active) {
            return (styles.unactive_letter)
        }
    }
    return (
        <button className={`${styles.letter_box_container} ${showLetterStatus()}`}>
            {letter}

        </button>
    )
}
export default LetterBox;