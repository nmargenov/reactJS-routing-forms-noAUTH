import { useEffect, useState } from "react";
import styles from "./details.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteGameById, getGameById } from "../services/gameService";

export const Details = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getGameById(id)
        .then(setGame);
  }, [id]);

  async function onDeleteHandler(){
    const accept = confirm(`Are you sure you want to delete ${game.title}?`);
    if(accept){
        await deleteGameById(id);
        navigate('/catalog');
    }
  }

  return (
    <section id={styles["game-details"]}>
      <h1>Game Details</h1>
      <div className={styles["info-section"]}>
        <div className={styles["game-header"]}>
          <img className={styles["game-img"]} src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className={styles["levels"]}>MaxLevel: {game.maxLevel}</span>
          <p className={styles["type"]}>{game.category}</p>
        </div>

        <p className={styles["text"]}>
            {game.summary}
        </p>

        <div className={styles["buttons"]}>
          <Link to={`/catalog/${id}/edit`} className={styles["button"]}>
            Edit
          </Link>
          <Link onClick={onDeleteHandler} className={styles["button"]}>
            Delete
          </Link>
        </div>
      </div>
    </section>
  );
};
