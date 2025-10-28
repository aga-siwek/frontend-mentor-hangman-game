import styles from "./PasswordLetter.module.css";
import { GAME_RESULT } from "../../../store/gameSlice.js";

function PasswordLetter({ letter, found = false, gameResult }) {
  const showLetterDivStyle = () => {
    if (letter === " ") {
      return styles.transparent;
    }
    if (found) {
      return styles.found_letter_div;
    } else if (!found) {
      return styles.unfound_letter_div;
    }
  };

  const showLetterStyle = () => {
    if (letter === " ") {
      return styles.transparent;
    } else if (found) {
      return styles.found_letter;
    } else if (!found) {
      return styles.unfound_letter;
    }
  };

  const showWinResult = () => {
    if (gameResult === GAME_RESULT.WIN) {
      return styles.show_win_password;
    } else if (gameResult === GAME_RESULT.LOSE) {
      return styles.show_lose_password;
    }
  };

  const showWinResultOnLetter = () => {
    if (gameResult === GAME_RESULT.WIN) {
      return styles.show_win_password_letter;
    } else if (gameResult === GAME_RESULT.LOSE) {
      return styles.show_lose_password_letter;
    }
  };

  return (
    <div
      className={`${styles.password_letter_container} ${showLetterDivStyle()} ${showWinResult()}`}
    >
      <p className={`${showLetterStyle()} ${showWinResultOnLetter()}`}>
        {" "}
        {letter}{" "}
      </p>
    </div>
  );
}

export default PasswordLetter;
