import styles from "./Logo.module.css"
import { ReactSVG } from 'react-svg'
import LogoImage from "/src/assets/logo.svg"

function Logo() {
    return (
        <div className={styles.logo}>
            <div className={styles.logo_container}>
                <ReactSVG src={LogoImage} alt="Logo" className={styles.logo_image}/>
            </div>
            <div className={styles.content_container}></div>
        </div>
    )
}
export default Logo;