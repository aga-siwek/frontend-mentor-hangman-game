import styles from "./Letters.module.css"
import LetterBox from "./LetterBox.jsx";
import {GAME_RESULT} from "../../../store/gameSlice.js";

function Letters({clickLetter, selectedLetters, gameResult}) {

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
                            isActive={gameResult === GAME_RESULT.WIN || gameResult === GAME_RESULT.LOSE ? true :
                                selectedLetters === undefined ? true : !selectedLetters.includes(letter)}
                            onClick={clickLetter}
                            disable={selectedLetters.includes(letter)}/>))}
        </div>
    )
}

export default Letters;