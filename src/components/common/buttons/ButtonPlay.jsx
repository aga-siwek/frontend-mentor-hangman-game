import styles from "./ButtonPlay.module.css"
import playIcon from "../../../assets/icon-play.svg"
import {ReactSVG} from "react-svg";

function ButtonPlay({onClick = null}) {

    return (
        <button
            className={styles.button_container}
            onClick={(e) => onClick(e)}>
            <ReactSVG src={playIcon} alt="Play" className={styles.play_icon}/>
        </button>
    )
}

export default ButtonPlay;