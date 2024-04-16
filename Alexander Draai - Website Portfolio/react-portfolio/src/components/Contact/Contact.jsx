// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <p
                        className={styles.contactLinks}
                    ><a href="mailto:StevenAlexanderDraai@gmail.com">StevenAlexanderDraai@gmail.com</a></p>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <p
                        className={styles.contactLinks}
                    ><a href="https://www.linkedin.com/in/alexander-draai">www.linkedin.com/in/alexander-draai</a></p>

                </li>
                <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <p
                        className={styles.contactLinks}
                    ><a href="https://github.com/dreeemchaser">https://github.com/dreeemchaser</a></p>

                </li>
            </ul>
        </footer>
    );
};