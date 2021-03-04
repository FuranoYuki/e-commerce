import React from "react";
// import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className={styles.login}>
        <form className={styles.login_form}>
          <h1 className={styles.header}>Log in</h1>
          <input
            name="email"
            type="email"
            autoComplete="off"
            placeholder="email"
            className={styles.form_input}
          />
          <input
            name="password"
            type="password"
            autoComplete="off"
            placeholder="password"
            className={styles.form_input}
          />
          <button className={styles.form_button} type="button" onClick={logIn}>
            Enter
          </button>
          {/* <div className={styles.form_options}>
            <Link href="/">
              <a className={styles.options_have}>I already have an account</a>
            </Link>
            <div className={styles.options_seperator}>or login by</div>
          </div>
          <div
            className={styles.alternative}
            onClick={() => {
              signIn("github", { callbackUrl: "http://localhost:3000/" });
            }}
            onKeyDown={() => {
              signIn("github", { callbackUrl: "http://localhost:3000/" });
            }}
            role="button"
            tabIndex={0}
          >
            <div className={`${styles.alternative_icon} ${styles.github_icon}`}>
              <FontAwesomeIcon icon={faGithub} />
              <div className={styles.alternative_title}>Github</div>
            </div>
          </div> */}
        </form>
      </main>
    </>
  );
};

export default Login;
