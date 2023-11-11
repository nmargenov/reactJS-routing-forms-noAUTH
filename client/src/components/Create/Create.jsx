import { useState } from "react";
import { create } from "../services/gameService";
import { useNavigate } from "react-router-dom";

import styles from "../shared/create-edit.module.css";

export const Create = () => {
  const initialValues = {
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  };

  const [values, setValues] = useState(initialValues);


  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    await create(values);
    setValues(initialValues);
    navigate('/catalog');
  }

  function onInputChange(e) {
    setValues((oldState) => ({ ...oldState, [e.target.name]: e.target.value }));
  }

  return (
    <section id={styles["create-page"]} className={styles["auth"]}>
      <form onSubmit={onSubmit} id={styles["create"]}>
        <div className={styles["container"]}>
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            onChange={onInputChange}
            value={values.title}
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
          />

          <label htmlFor="category">Category:</label>
          <input
            onChange={onInputChange}
            value={values.category}
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            onChange={onInputChange}
            value={values.maxLevel}
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
            placeholder="1"
          />

          <label htmlFor="game-img">Image:</label>
          <input
            onChange={onInputChange}
            value={values.imageUrl}
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
          />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id={styles["summary"]} onChange={onInputChange} value={values.summary}></textarea>
          <input
            className={styles["submit"]}
            type="submit"
            value="Create Game"
          />
        </div>
      </form>
    </section>
  );
};
