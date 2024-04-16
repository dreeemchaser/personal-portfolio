// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from "../Projects/Projects.module.css";
import {getImageUrl} from "../../utils.js";

const Projects = () => {
    return (
        <section
            className={styles.container}
            id="projects">
            <h2 className={styles.projectsTitle}> Projects </h2>



            {/* --------------------------------capstone-------------------------------------*/}
            <div className={styles.card}>
                <h2 className={styles.cardContentTitle}> e-Commerce Website</h2>
                <div>
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/e-commerce.png")}
                         className={styles.bannerImage}
                    />
                </div>
                <p>
                    Final year project. <br/>
                    e-Commerce website selling computer parts.
                </p>
                <div className={styles.techStack}>
                    <h2 className={styles.cardContentTitle}> Tech-Stack </h2>
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/HTML-Icon.png")}
                         href="https://icons8.com/icon/20909/html-5"
                    />
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/CSS-Icon.png")}
                         href="https://icons8.com/icon/7gdY5qNXaKC0/css3"
                    />
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/JS-Icon.png")}
                         href="https://icons8.com/icon/108784/javascript"
                    />
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/Vue-Icon.png")}
                         href="https://icons8.com/icon/108784/javascript"
                    />
                </div>
                <p className={styles.cardContentTitle}>
                    <button
                        className={styles.btnGitHubLink}
                    >
                    <a
                            href="https://github.com/dreeemchaser/TO-DO-List.git"
                        >
                            GitHub Link
                        </a>
                    </button>
                </p>
            </div>

            {/* -----------------------------------------------------------------------------*/}

            {/* --------------------------------to-do-list-------------------------------------*/}
            <div className={styles.card}>
                <h2 className={styles.cardContentTitle}> To-Do-List</h2>
                <div>
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/to-do-list.png")}
                         className={styles.bannerImage}
                    />
                </div>
                <p>
                    Simple To-Do-List application <br/>
                    using HTML, CSS, JavaScript.
                </p>
                <div className={styles.techStack}>
                    <h2 className={styles.cardContentTitle}> Tech-Stack </h2>
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/HTML-Icon.png")}
                         href="https://icons8.com/icon/20909/html-5"
                    />
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/CSS-Icon.png")}
                         href="https://icons8.com/icon/7gdY5qNXaKC0/css3"
                    />
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/JS-Icon.png")}
                         href="https://icons8.com/icon/108784/javascript"
                    />
                </div>
                <p className={styles.cardContentTitle}>
                    <button
                        className={styles.btnGitHubLink}
                    >
                        <a
                            href="https://github.com/dreeemchaser/TO-DO-List.git"
                        >
                            GitHub Link
                        </a>
                    </button>
                </p>
            </div>
            {/* -------------------------------------------------------------------------*/}


            {/* -----------------------------temperature-conversion-------------------------------------*/}
            <div className={styles.card}>
                <h2 className={styles.cardContentTitle}> Temperature Conversion </h2>
                <div>
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/temperature-conversion.png")}
                         className={styles.bannerImage}
                    />
                </div>
                <p> Users are able to convert to Celsius, <br/>
                    Kelvin and Fahrenheit.</p>
                <div className={styles.techStack}>
                    <h2 className={styles.cardContentTitle}> Tech-Stack </h2>
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/HTML-Icon.png")}
                         href="https://icons8.com/icon/20909/html-5"
                    />
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/CSS-Icon.png")}
                         href="https://icons8.com/icon/7gdY5qNXaKC0/css3"
                    />
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/JS-Icon.png")}
                         href="https://icons8.com/icon/108784/javascript"
                    />
                </div>
                <p className={styles.cardContentTitle}>
                    <button
                        className={styles.btnGitHubLink}
                    >
                        <a
                            href="https://github.com/dreeemchaser/Unit-Converter.git"
                        >
                            GitHub Link
                        </a>
                    </button>
                </p>
            </div>
            {/* -------------------------------------------------------------------------*/}

            {/* -----------------------------weather-app-------------------------------------*/}
            <div className={styles.card}>
                <h2 className={styles.cardContentTitle}> Weather Application </h2>
                <div>
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/weather-application.png")}
                         className={styles.bannerImage}
                    />
                </div>
                <p> Users are able to search for a city <br/>
                    and retrieve a weather report. <br/></p>
                <div className={styles.techStack}>
                    <h2 className={styles.cardContentTitle}> Tech-Stack </h2>
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/HTML-Icon.png")}
                         href="https://icons8.com/icon/20909/html-5"
                    />
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/CSS-Icon.png")}
                         href="https://icons8.com/icon/7gdY5qNXaKC0/css3"
                    />
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/JS-Icon.png")}
                         href="https://icons8.com/icon/108784/javascript"
                    />
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/API-Icon.png")}
                         href="https://icons8.com/icon/108784/javascript"
                    />
                </div>
                <p className={styles.cardContentTitle}>
                    <button
                        className={styles.btnGitHubLink}
                    >
                        <a
                            href="https://github.com/dreeemchaser/Weather-Application.git"
                        >
                            GitHub Link
                        </a>
                    </button>
                </p>
            </div>
            {/* -------------------------------------------------------------------------*/}

            {/* -----------------------------password-generator-------------------------------------*/}
            <div className={styles.card}>
                <h2 className={styles.cardContentTitle}> Password Generator </h2>
                <div>
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/password-generator.png")}
                         className={styles.bannerImage}
                    />
                </div>
                <p> Users are able to select passwords requirements <br/>
                    and clicking generate will produce a password.
                    . <br/></p>
                <div className={styles.techStack}>
                    <h2 className={styles.cardContentTitle}> Tech-Stack </h2>
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/HTML-Icon.png")}
                         href="https://icons8.com/icon/20909/html-5"
                    />
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/CSS-Icon.png")}
                         href="https://icons8.com/icon/7gdY5qNXaKC0/css3"
                    />
                    <img alt="HTML-Icon"
                         src={getImageUrl("projects/JS-Icon.png")}
                         href="https://icons8.com/icon/108784/javascript"
                    />
                </div>
                <p className={styles.cardContentTitle}>
                    <button
                        className={styles.btnGitHubLink}
                    >
                        <a
                            href="https://github.com/dreeemchaser/Password-Generator.git"
                        >
                            GitHub Link
                        </a>
                    </button>
                </p>
            </div>
            {/* -------------------------------------------------------------------------*/}

        </section>
    );
};

export default Projects;
