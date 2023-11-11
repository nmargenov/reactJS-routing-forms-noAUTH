import styles from "../catalog.module.css";

export const ListCatalog = ({
    title,
    category,
    imageUrl
}) => {
  return (
    <div className={styles["allGames"]}>
      <div className={styles["allGames-info"]}>
        <img src={imageUrl} />
        <h6>{category}</h6>
        <h2>{title}</h2>
        <a href="#" className={styles["details-button"]}>
          Details
        </a>
      </div>
    </div>
  );
};
