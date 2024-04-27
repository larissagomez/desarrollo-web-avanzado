import React from "react";

import styles from "./NavBar.module.css"


export const NavBar =() => {
    return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">PORTAFOLIO WEB</a>
        <div className={styles.menu}>
            <ul className={styles.menuItems}>
                <li>
                    <a href="#inicio">Inicio</a>
                </li>
                <li>
                    <a href="#nosotras">Nosotras</a>
                </li>
                <li>
                    <a href="#proyectos">Proyectos</a>
                </li>
                <li>
                    <a href="#contacto">Contáctanos</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}