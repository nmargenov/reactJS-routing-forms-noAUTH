import { Link } from "react-router-dom";
import styles from "../catalog.module.css";

export const ListCatalog = ({
    title,
    category,
    imageUrl,
    _id
}) => {
  return (
    <div className={styles["allGames"]}>
      <div className={styles["allGames-info"]}>
        <img src={imageUrl} />
        <h6>{category}</h6>
        <h2>{title}</h2>
        <Link to={`/catalog/${_id}/details`} className={styles["details-button"]}>
          Details
        </Link>
      </div>
    </div>
  );
};
