import styles from "./Password.module.css"
import PasswordLetter from "./PasswordLetter.jsx";

function Password({password = "Hacuna matata"}) {
    const password_list = password.split("")
    console.log(password_list)

    return (
        <div className={styles.password_container}>
            <div className={styles.password_word}>
            {password_list.map((single_letter, index) => (
                <PasswordLetter letter={single_letter} key={`${index}_${single_letter}`} found={true} />
            ))}
            </div>
        </div>
    );
}

export default Password;