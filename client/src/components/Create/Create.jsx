import styles from './create.module.css';

export const Create = () => {
  return (
    <section id={styles["create-page"]} className={styles["auth"]}>
      <form id={styles["create"]}>
        <div className={styles["container"]}>
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
            placeholder="1"
          />

          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
          />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id={styles["summary"]}></textarea>
          <input className={styles["submit"]} type="submit" value="Create Game" />
        </div>
      </form>
    </section>
  );
};
