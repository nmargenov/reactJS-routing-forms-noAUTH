import { useEffect, useState } from "react";
import styles from "../shared/create-edit.module.css";
import { editGameById, getGameById } from "../services/gameService";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = () => {

    const initialState={
        title:'',
        category:'',
        maxLevel:'',
        imageUrl:'',
        summary:'',
    }

    const [game,setGame] = useState(initialState);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getGameById(id)
            .then(setGame);
    },[]);

    function onChangeHandler(e){
        setGame(oldState =>({...oldState,[e.target.name]:e.target.value}))
    }

    async function onSubmit(e){
        e.preventDefault();
        await editGameById(id,game);
        navigate(`/catalog/${id}/details`);
    }

  return (
    <section id={styles["edit-page"]} className={styles["auth"]}>
      <form onSubmit={onSubmit} id={styles["edit"]}>
        <div className={styles["container"]}>
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input type="text" id="title" name="title" onChange={onChangeHandler} value={game.title} />

          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" onChange={onChangeHandler} value={game.category} />

          <label htmlFor="levels">MaxLevel:</label>
          <input type="number" id="maxLevel" name="maxLevel" min="1" onChange={onChangeHandler} value={game.maxLevel} />

          <label htmlFor="game-img">Image:</label>
          <input type="text" id="imageUrl" name="imageUrl" onChange={onChangeHandler} value={game.imageUrl} />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary" onChange={onChangeHandler}value={game.summary}></textarea>
          <input className={styles["submit"]} type="submit" value="Edit Game" />
        </div>
      </form>
    </section>
  );
};
