import styles from "./InfoCard.module.css"

function InfoCard({number = "00", title = "instruction title", text = "instruction text"}) {

    return (
        <div className={styles.info_card_container}>
            <div className={styles.header}>
                <div className={styles.number}>{number}</div>
                <div className={styles.title_mobile}><h3 className={styles.title_text}>{title}</h3></div>

            </div>
            <div className={styles.content}>
                <div className={styles.title}><h3 className={styles.title_text}>{title}</h3></div>
                <div className={styles.instruction}><p className={styles.instruction_text}>{text}</p></div>
            </div>
        </div>
    )
}

export default InfoCard;