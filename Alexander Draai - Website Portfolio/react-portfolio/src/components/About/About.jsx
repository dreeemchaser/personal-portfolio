import {getImageUrl} from "../../utils.js";
import styles from "./About.module.css";

export const About = () => {
    return(
        <section
            className={styles.container}
            id={"about"}
        >
            <h2 className={styles.title}> About </h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutIcons}>
                            <img
                                src={getImageUrl("about/full-stackIcon.png")}
                                alt="Cursor"
                            />
                        </div>
                        <div className={styles.aboutItemText}>
                            <h3> Full-Stack </h3>
                            <p> As a recent graduate, I proudly call myself a full-stack developer.
                                With my diploma in Application Development and a portfolio with coding projects,
                                I have full confidence in my programing abilities. </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <div className={styles.aboutIcons}>
                            <img
                                src={getImageUrl("about/coding-language.png")}
                                alt="Server Icon."
                            />
                        </div>
                        <div className={styles.aboutItemText}>
                            <h3> Coding History </h3>
                            <p>
                                I began coding with Delphi, but during university, I was drawn to Java's versatility,
                                making it my main language.
                                Throughout my studies, Java became my trusted companion, anchoring my projects. While I
                                explored HTML, CSS, JavaScript,
                                Python, and Kotlin, my expertise truly lies in Java, where I've honed my skills.
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <div className={styles.aboutIcons}>
                            <img
                                src={getImageUrl("about/qualification.png")}
                                alt="Server Icon."
                            />
                        </div>
                        <div className={styles.aboutItemText}>
                            <h3> Qualification </h3>
                            <p>
                                <li>
                                    <strong>Higher Certificate:</strong> Information and Communication
                                </li>
                                <li>
                                   <strong>Diploma: </strong> Application Development
                                </li>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
