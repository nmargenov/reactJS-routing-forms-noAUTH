import { useEffect, useState } from "react";
import styles from "./details.module.css";
import { Link, useParams } from "react-router-dom";
import { getGameById } from "../services/gameService";

export const Details = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    getGameById(id)
        .then(setGame);
  }, [id]);

  function onDeleteHandler(){
    const accept = confirm(`Are you sure you want to delete ${game.title}?`);
    if(accept){
        console.log('del');
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
          <a href="#" className={styles["button"]}>
            Edit
          </a>
          <Link onClick={onDeleteHandler} className={styles["button"]}>
            Delete
          </Link>
        </div>
      </div>
    </section>
  );
};
