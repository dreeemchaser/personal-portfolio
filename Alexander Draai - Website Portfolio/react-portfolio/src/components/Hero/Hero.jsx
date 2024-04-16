import {getImageUrl} from "../../utils.js";
import styles from "./Hero.module.css";

export const Hero = () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> Alexander Draai</h1>
                <p className={styles.description}>
                    Welcome to my portfolio! As a recent graduate specializing in Application Development,
                    I have explored a diverse range of technologies and coding languages.
                    From classroom theory to hands-on projects, I am excited to showcase
                    how my education has prepared me to tackle real-world software engineering challenges with enthusiasm and expertise.
                </p>
                <a className={styles.contactBtn}
                    href={"mailto:StevenAlexanderDraai@gmail.com"}>
                    Contact Me
                </a>
            </div>
            <img
                className={styles.heroImg}
                src={getImageUrl("hero/hero-alexander.png")}
                alt="hero Image of me"
            />
        </section>
    );
};

export default Hero;