import styles from "./Letters.module.css"
import LetterBox from "./LetterBox.jsx";

function Letters() {
    const alphabet = [
        "A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U",
        "V", "W", "X", "Y", "Z"
    ]
    return (
        <div className={styles.letters_container}>
            {alphabet.map((letter, index) =>
                (<LetterBox key={letter} letter={letter} active={true} />))}
        </div>
    )
}
export default Letters;