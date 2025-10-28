import styles from "./CategoryCard.module.css";

function CategoryCard({ category, onClick = null }) {
  return (
    <div className={styles.category_card} onClick={() => onClick(category)}>
      {category}
    </div>
  );
}

export default CategoryCard;
