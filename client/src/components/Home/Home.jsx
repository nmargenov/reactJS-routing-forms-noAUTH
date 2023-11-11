import styles from './home.module.css';

export const Home = () => {
  return (
    <section id={styles["welcome-world"]}>
      <div className={styles["welcome-message"]}>
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />

      <div id={styles["home-page"]}>
        <h1>Latest Games</h1>

        <div className={styles.game}>
          <div className={styles["image-wrap"]}>
            <img src="./images/CoverFire.png" />
          </div>
          <h3>Cover Fire</h3>
          <div className={styles.rating}>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
          <div className={styles["data-buttons"]}>
            <a href="#" className={styles["btn details-btn"]}>
              Details
            </a>
          </div>
        </div>

        {/* <p className="no-articles">No games yet</p> */}
      </div>
    </section>
  );
};
