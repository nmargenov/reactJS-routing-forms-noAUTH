import styles from './login.module.css';

export const Login = () =>{
    return(
        <section className={styles.login}>
            <form id={styles["login"]}>
                <div className={styles.container}>
                    <div className={styles['brand-logo']}></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com"/>
                    <label htmlFor="login-password">Password:</label>
                    <input type="password" id="login-password" name="password"/>
                    <input type="submit" className={styles["btn-submit"]} value="Login"/>
                    <p className={styles.field}>
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}