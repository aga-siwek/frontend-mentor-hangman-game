import styles from "./ButtonBack.module.css"
import backIcon from "../../../assets/icon-back.svg"
import {ReactSVG} from "react-svg";

function ButtonBack({onClick=null}) {
    return (
        <button className={styles.button_container} onClick={(e) => onClick(e)}>
            <ReactSVG src={backIcon} alt="Back icon" className={styles.back_icon} />
        </button>
    )
}
export default ButtonBack;