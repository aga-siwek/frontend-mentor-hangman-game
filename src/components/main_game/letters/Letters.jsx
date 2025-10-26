import styles from "./Letters.module.css"
import LetterBox from "./LetterBox.jsx";

function Letters({clickLetter, selectedLetters}) {
    const alphabet = [
        "A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U",
        "V", "W", "X", "Y", "Z"
    ]

    return (
        <div className={styles.letters_container}>
            {alphabet.map((letter) =>
                (<LetterBox key={letter} letter={letter}
                            isActive={selectedLetters === undefined ? true : !selectedLetters.includes(letter)}
                            onClick={clickLetter}/>))}
        </div>
    )
}

export default Letters;