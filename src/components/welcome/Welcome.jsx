import styles from "./Welcome.module.css"
import Logo from "../common/logo/Logo.jsx"
import ButtonPlay from "../common/buttons/ButtonPlay.jsx"
import Button from "../common/buttons/Button.jsx"
import {useSelector, useDispatch} from 'react-redux'
import {goToCategory, goToHowToPlay} from "../../store/gameSlice.js";

function Welcome() {
    const dispatch = useDispatch()
    const onHowToPlay = () => {
        dispatch(goToHowToPlay())
    }
    const onPlay = () => {
        dispatch(goToCategory())
    }
    return (

        <div className={styles.container}>
            <div className={styles.welcome_container}>
                <div className={styles.logo_container}>
                    <Logo className={styles.logo}/></div>
                <div className={styles.content_container}>
                    <ButtonPlay onClick = {() => onPlay()}/>
                   <Button text="HOW TO PLAY" color="blue" size="big"  onClick = {() => onHowToPlay()}/>
                </div>
            </div>
        </div>
    )
}

export default Welcome;