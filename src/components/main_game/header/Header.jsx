import styles from "./Header.module.css"
import ButtonMenu from "../../common/buttons/ButtonMenu.jsx";
import LifeCounter from "./LifeCounter.jsx";

function Header({onClick}) {
    return (
        <div className={styles.header_container}>
            <ButtonMenu onClick = {() => onClick()}/>
            <LifeCounter />
        </div>
    )
}
export default Header;