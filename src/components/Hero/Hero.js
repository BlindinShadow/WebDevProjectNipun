import React from "react";

import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nipun</h1>
        <p className={styles.description}>
          I'm a software developer with experience in React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:yk.nipun@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="https://i.makeagif.com/media/1-12-2024/4V_zCV.gif"
        alt="Omen" 
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
