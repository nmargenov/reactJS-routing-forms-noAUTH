import { useEffect, useState } from "react";
import styles from "./catalog.module.css";
import { getAllGames } from "../services/gameService";
import { ListCatalog } from "./ListCatalog/ListCatalog";

export const Catalog = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames()
      .then(setGames);
  }, []);

  return (
    <section id={styles["catalog-page"]}>
      <h1>All Games</h1>

      {games.map(g=><ListCatalog key={g._id} {...g}/>)}

      {games.length===0 && <h3 className={styles["no-articles"]}>No articles yet</h3>}
    </section>
  );
};
