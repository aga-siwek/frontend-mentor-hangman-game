import styles from "./LetterBox.module.css"

function LetterBox({letter, isActive = false, onClick = null,}) {

    const showLetterStatus = () => {
        if (isActive) {
            return (styles.active_letter)
        } else if (!isActive) {
            return (styles.unactive_letter)
        }
    }
    return (
        <button
            className={`${styles.letter_box_container} ${showLetterStatus()}`}
            onClick={() => onClick(letter)}>
            {letter}
        </button>
    )
}

export default LetterBox;