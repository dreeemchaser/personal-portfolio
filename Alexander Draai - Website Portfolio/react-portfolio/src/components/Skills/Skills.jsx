// eslint-disable-next-line no-unused-vars
import React from 'react'
import {getImageUrl} from "../../utils.js";
import styles from "../Skills/Skills.module.css";

const Skills = () => {
    return (
        <section
            className={styles.container}
            id="skills">
            <h2 className={styles.skillsTitle}>  Skills </h2>
            <div>
                <ul className={styles.skillItems}>
                    <li className={styles.skillItem}>
                        <img
                            className={styles.skillItemImage}
                            src={getImageUrl("skills/Java-Icon.png")}
                            alt="Cursor"
                        />
                        <h3> Java </h3>
                        <p
                            className={styles.skillItemDesc}
                        > As a recent graduate, I proudly call myself a full-stack developer. With my diploma in
                            Application Development and a portfolio with coding projects, I have full confidence in
                            my abilities.
                        </p>
                        <br/>


                        <a target="_blank" href="https://icons8.com/icon/GPfHz0SM85FX/java">Java</a> icon by <a
                        target="_blank" href="https://icons8.com">Icons8</a>
                    </li>

                    <li className={styles.skillItem}>
                        <img
                            className={styles.skillItemImage}
                            src={getImageUrl("skills/Spring-Icon.png")}
                            alt="Cursor"
                        />
                        <h3> Springboot </h3>
                        <p
                            className={styles.skillItemDesc}
                        > As a recent graduate, I proudly call myself a full-stack developer. With my diploma in
                            Application Development and a portfolio with coding projects, I have full confidence in
                            my abilities.
                        </p>
                        <br/>
                        <div>
                            <a target="_blank" href="https://icons8.com/icon/90519/spring-boot">Spring Boot</a>
                            icon by
                            <a target="_blank" href="https://icons8.com">Icons8</a>
                        </div>
                    </li>

                    <li className={styles.skillItem}>
                        <img
                            className={styles.skillItemImage}
                            src={getImageUrl("skills/HTML-Icon.png")}
                            alt="Cursor"
                        />
                        <h3> HTML </h3>
                        <p
                            className={styles.skillItemDesc}
                        > As a recent graduate, I proudly call myself a full-stack developer. With my diploma in
                            Application Development and a portfolio with coding projects, I have full confidence in
                            my abilities. </p>
                        <br/>
                        <div>
                            <a target="_blank" href="https://icons8.com/icon/20909/html-5">HTML</a> icon by <a
                            target="_blank" href="https://icons8.com">Icons8</a>
                        </div>
                    </li>

                    <li className={styles.skillItem}>
                        <img
                            className={styles.skillItemImage}
                            src={getImageUrl("skills/css.png")}
                            alt="Cursor"
                        />
                        <h3> CSS </h3>
                        <p
                            className={styles.skillItemDesc}
                        > As a recent graduate, I proudly call myself a full-stack developer. With my diploma in
                            Application Development and a portfolio with coding projects, I have full confidence in
                            my abilities. </p>
                        <br/>
                        <div>
                            <a target="_blank" href="https://icons8.com/icon/3BTBsJs5myRy/css3">CSS</a> icon by <a
                            target="_blank" href="https://icons8.com">Icons8</a>
                        </div>
                    </li>


                    <li className={styles.skillItem}>
                        <img
                            className={styles.skillItemImage}
                            src={getImageUrl("skills/figma.png")}
                            alt="Cursor"
                        />
                        <h3> FIGMA </h3>
                        <p
                            className={styles.skillItemDesc}
                        > As a recent graduate, I proudly call myself a full-stack developer. With my diploma in
                            Application Development and a portfolio with coding projects, I have full confidence in
                            my abilities. </p>
                        <br/>
                        <div>
                            <a target="_blank" href="https://icons8.com/icon/zfHRZ6i1Wg0U/figma">Figma</a> icon by <a
                            target="_blank" href="https://icons8.com">Icons8</a>
                        </div>
                    </li>


                    <li className={styles.skillItem}>
                        <img
                            className={styles.skillItemImage}
                            src={getImageUrl("skills/react.png")}
                            alt="Cursor"
                        />
                        <h3> REACT </h3>
                        <p
                            className={styles.skillItemDesc}
                        > As a recent graduate, I proudly call myself a full-stack developer. With my diploma in
                            Application Development and a portfolio with coding projects, I have full confidence in
                            my abilities. </p>
                        <br/>
                    </li>

                </ul>
            </div>

        </section>
    );
}

export default Skills