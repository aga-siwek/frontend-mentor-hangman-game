import styles from "./PasswordLetter.module.css"

function PasswordLetter({letter, found = false}, onClick = null) {
    const showLetterDivStyle = () => {
        if (letter === " ") {
            return styles.transparent
        }
        if (found) {
            return styles.found_letter_div
        } else if (!found) {
            return styles.unfound_letter_div
        }
    }

    const showLetterStyle = () => {
        if (letter === " ") {
            return styles.transparent
        } else if (found) {
            return styles.found_letter
        } else if (!found) {
            return styles.unfound_letter
        }
    }

    return (
        <div className={`${styles.password_letter_container} ${showLetterDivStyle()}`}>
            <p className={`${showLetterStyle()}`}> {letter} </p>
        </div>
    )
}

export default PasswordLetter;