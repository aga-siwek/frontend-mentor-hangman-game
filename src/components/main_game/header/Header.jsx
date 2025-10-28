import styles from "./Header.module.css"
import ButtonMenu from "../../common/buttons/ButtonMenu.jsx";
import LifeCounter from "./LifeCounter.jsx";

function Header({onClick, category, life}) {

    return (
        <div className={styles.header_container}>
            <div className={styles.header_left}>
                <ButtonMenu onClick={() => onClick()}/>
                <p className={styles.category_text}>{category}</p>
            </div>
            <LifeCounter life={life}/>
        </div>
    )
}

export default Header;