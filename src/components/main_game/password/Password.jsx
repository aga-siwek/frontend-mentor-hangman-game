import styles from "./Password.module.css";
import PasswordLetter from "./PasswordLetter.jsx";

function Password({password = "Hacuna Matata", selectedLetters, gameResult}) {
    const password_list = password.split(" ");

    return (
        <div className={styles.password_container}>
            {password_list.map((single_word, wordIndex) => (
                <div className={styles.password_word} key={wordIndex}>
                    {single_word.split("").map((single_letter, letterIndex) => (
                        <PasswordLetter
                            letter={single_letter}
                            key={`${wordIndex}_${letterIndex}_${single_letter}`}
                            found={selectedLetters === undefined ? false : selectedLetters.includes(single_letter.toUpperCase())}
                            gameResult={gameResult}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Password;