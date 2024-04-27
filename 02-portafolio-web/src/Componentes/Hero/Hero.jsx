import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}id="inicio">
            <div className={styles.content}>
                <h1 className={styles.title}>Bienvenid@,</h1>
                <h2 className={styles.h2}>a nuestro portafolio web</h2>
                <p className={styles.description}>
                    Aqui encontrarás desde dibujos en Pixelart hasta modelados 3D.
                </p>
                <a className={styles.contactBtn}> Contáctenos</a>
            </div>
    </section>
        );
};