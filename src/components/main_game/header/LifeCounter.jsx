import styles from "./LifeCounter.module.css"

function LifeCounter({life = 6}) {

    const showLossLife = () => {
        return styles[`life_${life}`];
    }

    return (
        <div className={styles.life_container}>
            <div className={styles.life_cycle_container}>
                <div className={`${styles.loss_of_life} ${showLossLife()}`}></div>
            </div>
            <div className={styles.heart}>❤</div>
        </div>
    )
}

export default LifeCounter;