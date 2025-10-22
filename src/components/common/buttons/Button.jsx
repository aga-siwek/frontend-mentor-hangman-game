import styles from "./Button.module.css"

function Button({color="blue", text="click me", size, onClick=null}) {

    const colorStyle = () => {
        if (color === "blue") {
            return styles.blue_color
        }
        else if (color === "gradient") {
            return styles.gradient_color
        }
    }

    const sizeStyle = () => {
        if (size === "big") {
            return styles.big_size
        }
        else if (size === "medium") {
            return styles.big_medium
        }
    }

    return (
        <button className={`${styles.button_container} ${colorStyle()} ${sizeStyle()}`} onClick={(e) => onClick(e)}>
            {text}
        </button>
    )
}
export default Button;