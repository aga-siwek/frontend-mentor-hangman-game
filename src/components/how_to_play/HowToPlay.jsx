import styles from "./HowToPlay.module.css"
import ButtonBack from "../common/buttons/ButtonBack.jsx";
import InfoCard from "./InfoCard.jsx";
import {useSelector, useDispatch} from 'react-redux'
import {exitGame} from "../../store/gameSlice.js";

function HowToPlay() {
    const dispatch = useDispatch()
    const onBack = () => {
        dispatch(exitGame())
    }
    return (
        <div className={styles.how_to_play_container}>
            <div className={styles.top}>
                <ButtonBack onClick = {() => onBack()}/>
                <div className={styles.header}><h2 className={styles.header_text}>HOW TO PLAY</h2></div>
            </div>
            <div className={styles.cards}>
                <InfoCard
                    number = "01"
                    key = "01"
                    title = "Choose a category"
                    text = "First, choose a word category, like animals or movies.
                    The computer then randomly selects a secret word from that
                    topic and shows you blanks for each letter of the word." />

                <InfoCard
                    number = "02"
                    key = "02"
                    title = "Guess letters"
                    text = "Take turns guessing letters.
                    The computer fills in the relevant blank spaces if your guess is correct.
                    If it’s wrong, you lose some health, which empties after eight incorrect guesses." />

                <InfoCard
                    number = "03"
                    key = "03"
                    title = "Win or lose"
                    text = "You win by guessing all the letters in the word before your health runs out.
                    If the health bar empties before you guess the word, you lose." />
            </div>
        </div>
    )
}

export default HowToPlay;