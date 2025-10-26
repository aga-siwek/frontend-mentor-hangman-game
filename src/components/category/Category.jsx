import styles from "./Category.module.css"
import ButtonBack from "../common/buttons/ButtonBack.jsx";
import CategoryCard from "./CategoryCard.jsx";
import {useSelector, useDispatch} from 'react-redux'
import {exitGame, startGame} from "../../store/gameSlice.js";

function Category() {
    const dispatch = useDispatch()
    const onBack = () => {
        dispatch(exitGame())
    }
    const onPickCategory = (category) => {
        dispatch(startGame(category))
    }

    return (
        <div className={styles.category_container}>
            <div className={styles.top}>
                <ButtonBack onClick={() => onBack()}/>
                <div className={styles.header}>
                    <h2 className={styles.header_text}>PICK A CATEGORY</h2></div>
            </div>
            <div className={styles.category_cards}>
                <CategoryCard category="MOVIES" onClick={onPickCategory}/>
                <CategoryCard category="TV SHOWS" onClick={onPickCategory}/>
                <CategoryCard category="COUNTRIES" onClick={onPickCategory}/>
                <CategoryCard category="CAPITAL CITIES" onClick={onPickCategory}/>
                <CategoryCard category="ANIMALS" onClick={onPickCategory}/>
                <CategoryCard category="SPORTS" onClick={onPickCategory}/>
            </div>
        </div>
    )
}

export default Category;