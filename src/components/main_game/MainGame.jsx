import styles from "./MainGame.module.css";
import Header from "./header/Header.jsx";
import Password from "./password/Password.jsx";
import Letters from "./letters/Letters.jsx";
import {
  continueGame,
  exitGame,
  GAME_RESULT,
  GAME_STATE,
  goToCategory,
  pauseGame,
  selectLetter,
  startGame,
} from "../../store/gameSlice.js";
import { useSelector, useDispatch } from "react-redux";
import Pause from "./pause/Pause.jsx";
import Summary from "./summary/Summary.jsx";

function MainGame() {
  const state = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const onPauseGame = () => {
    dispatch(pauseGame());
  };
  const onContinueGame = () => {
    dispatch(continueGame());
  };
  const onPlayAgain = () => {
    dispatch(startGame(state.category));
  };
  const onNewCategory = () => {
    dispatch(goToCategory());
  };
  const onQuitGame = () => {
    dispatch(exitGame());
  };
  const clickLetter = (letter) => {
    dispatch(selectLetter(letter));
  };

  return (
    <div className={styles.main_game_container}>
      <Header
        onClick={onPauseGame}
        category={state.category}
        life={state.life}
      />
      <div className={styles.main_game}>
        <Password
          password={state.selectPassword}
          selectedLetters={state.selectedLetters}
          gameResult={state.gameResult}
        />
        <Letters
          clickLetter={clickLetter}
          selectedLetters={state.selectedLetters}
          gameResult={state.gameResult}
        />
      </div>
      {state.gameState === GAME_STATE.PAUSE && (
        <Pause
          onContinueGame={onContinueGame}
          onNewCategory={onNewCategory}
          onQuitGame={onQuitGame}
        />
      )}
      {state.gameState === GAME_STATE.SUMMARY && (
        <Summary
          onPlayAgain={onPlayAgain}
          onNewCategory={onNewCategory}
          onQuitGame={onQuitGame}
          gameResult={state.gameResult}
        />
      )}
    </div>
  );
}

export default MainGame;
