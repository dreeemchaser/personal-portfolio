import styles from "./NavBar.module.css";
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import { getImageUrl } from "../../utils.js";


export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    alt="menuIcon"
                    src={menuOpen
                        ? getImageUrl("nav/closeIcon.png")
                        : getImageUrl("nav/menuIcon.png")}
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >

                    <li>
                        <a href='#about'>About</a>
                    </li>


                    <li>
                        <a href='#skills'>Skills</a>
                    </li>


                    <li>
                        <a href='#projects'> Projects</a>
                    </li>

                    <li>
                        <a href='#contact'>Contact</a>
                    </li>

                </ul>
            </div>

        </nav>
    );
};
