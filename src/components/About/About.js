import React from "react";

import styles from "./About.module.css";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSet_Icr8iw4X4nfIbCEFXXXlQOP5OBYsv9atREXuhw&s"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="https://cdn-icons-png.flaticon.com/128/650/650087.png" alt="Cursor icon" height={30} width={30}/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a software developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnA4mxP6eycoKiJMWNuYJ_ai3QxsFaQjKDKkNy0jukAkGOV10PsviXsVz4Q&s" alt="Server icon" height={100} width={100} />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3vZJUzznmPMNio4ys1ZEIeHBNgCR1tPTYCmMMpQ-VOZYZkYLOIF8jInW2jz4V8pxDeY&usqp=CAU" alt="UI icon" height={50} width={50} />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
