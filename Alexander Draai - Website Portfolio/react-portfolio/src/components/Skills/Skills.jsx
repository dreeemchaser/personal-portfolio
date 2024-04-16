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
                        >  During my four years at University, I was exposed to the intricacies of Java, diving deep into its object-oriented programming principles,
                            data structures, and algorithms. From the basics of syntax to advanced topics
                            I gained a comprehensive understanding of the language's capabilities. Through hands-on projects and assignments,
                            I honed my skills in designing efficient and scalable applications, leveraging Java's vast ecosystem of libraries and frameworks.
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
                        > My journey with Spring Boot started in my final year as we prepared for our big project.
                          I began by learning the basics, focusing on controllers, services, and repositories.
                          Through hands-on exercises and tutorials, I gained proficiency in setting up Spring Boot projects,
                          implementing RESTful APIs, managing business logic in services, and interacting with databases
                          using repositories. This foundational knowledge laid the groundwork for our project and equipped
                          me with the skills necessary to tackle real-world software development challenges.
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
                        > My journey with HTML started in my first year of university, where we learned the basics of creating webpages.
                            From understanding the structure of HTML documents to styling content with CSS,
                            I gained foundational knowledge that laid the groundwork for my further exploration into web development.
                            Through hands-on projects and assignments, I honed my skills in crafting well-structured and visually appealing webpages,
                            setting the stage for my continued learning and growth in the field of front-end development.

                        </p>
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
                        > My journey with CSS began alongside HTML in my first year of university.
                            From understanding selectors to mastering responsive design,
                            I learned to style webpages creatively and effectively.
                            Through practical exercises, I honed my skills in layout manipulation, typography, and color schemes.
                            This foundational knowledge empowered me to create visually engaging and user-friendly interfaces,
                            setting the stage for further exploration in web design. </p>
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
                        >
                            My experience with Figma began during a module in University, where I was tasked with recreating our University's website using the tool.
                            This hands-on project gave me invaluable experience and skills in understanding the basics of Figma and its practical application.
                            Through the process, I learned how to navigate the interface, create layouts, and incorporate design elements effectively.
                            This foundation equipped me with the knowledge and confidence to utilize Figma in various design projects, enabling me to
                            translate concepts into visually appealing prototypes with ease.
                        </p>
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
                        >
                            I took it upon myself to delve into the realm of React. Relying on tutorials as my guide,
                            I embarked on a journey to comprehend its inner workings and practical applications.
                            Through these resources, I acquired a foundational understanding of React's component-based
                            structure and its pivotal role in building dynamic user interfaces.Eventhough my excperince might be minimal,
                            I am interested in furthering my knowledge and understanding in the real world.
                        </p>
                        <br/>
                    </li>

                </ul>
            </div>

        </section>
    );
}

export default Skills