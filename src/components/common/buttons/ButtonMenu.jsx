import styles from "./ButtonMenu.module.css"
import {ReactSVG} from "react-svg";
import menuIcon from "../../../assets/icon-menu.svg"

function ButtonMenu({onClick}) {
    return (
        <button
            className={styles.button_container}
            onClick={(e) => onClick(e)}>
            <ReactSVG src={menuIcon} alt="Menu icon" className={styles.menu_icon}/>
        </button>
    )
}

export default ButtonMenu;