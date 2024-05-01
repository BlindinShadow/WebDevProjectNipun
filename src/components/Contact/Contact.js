import React from "react";
import styles from "./Contact.module.css";
import formStyles from "./ContactForm.module.css";
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

// const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />

// ReactDOM.render(element, document.body)


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <a href={`mailto:nipun.y2022@vitstudent.ac.in`}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/150px-Gmail_icon_%282020%29.svg.png"
            alt="Email icon"
            height={40} width={50}
          />
          </a>
          
        </li>
        <li className={styles.link}>
        <a href="https://www.linkedin.com/in/nipun-y-4a035121b">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAYFBMVEUAd7X///8Ac7NGlMRGk8QAdrUAbLAAbrDZ7PXV6fPy+fw9ir/p9Pkugbo0hr3D2umz0ORUnMh3q9C72eplocoIe7dsps6dxN6lyeCDs9TL4u+WwNzg7vVTmMYhg7uy1OcLxWtDAAABaklEQVRIie3W7Y6CMBAFUBxohwIK8qEIgu//lltou7TortNu9p83MRGSIzgzlEaHwETyU51jr5wrBWsODDzCgNcLrHjkHV5JOIE/hEnCOATGEiYhMHGgLBELgdi1lxlJ1IH8uvS17CjShtiriRCekM1mlm7oBaE2sCEMhA1vBg5+kCUG9n63GmGqXJYTqmNDlhcrrAkXdPsIx3FI+4TidpPDkHNOm7ndrP6U9TH/5VZxDewPsEvaS5t0CK8h9qXKSd4tq9T3EaC73rOl2EVp/X0bcqcddzMMU7YtbFuHHShsqH+lnJwlsUIqFIW7mLZAhPuYOfaGh5nR4fBotgLVQIWik+PE+11h38NCLUGmV+Ypfw9HdQU0j/lAhfr9AKafggizXHc81/VJibA4qvKzk4HE4nzgB/4jfLU8UiA26RqxQn0wfEOhTjTPMEIdZh9EOsw9QXzpPOdvMHgTGLztDN7oBm+twzfzYfkCChobmnKthiYAAAAASUVORK5CYII="
            alt="LinkedIn icon"
            height={50} width={50}
          />
          </a>
        </li>
        <li className={styles.link}>
        <a href="https://github.com/BlindinShadow/WebDevProjectNipun.git">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/300px-GitHub_Invertocat_Logo.svg.png"
          alt="GitHub icon"
          height={50} width={50}
        /> 
       </a>
        </li>
        <li className={styles.link}>
        <a href="https://github.com/BlindinShadow/WebDevProjectNipun.git">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/225px-Instagram_logo_2022.svg.png"
          alt="Instagram icon" height={50} width={50}
        /> 
       </a>
        </li>
      </ul>

      <div className={styles.formContainer}>
        <form className={formStyles.form} name="contactForm" method="post" action="/submit">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" placeholder="Your Name" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" placeholder="Your Email" />
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
  );
};