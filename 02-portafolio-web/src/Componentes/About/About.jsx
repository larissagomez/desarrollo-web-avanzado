import React from "react";
import bg from "../../assets/about/icon.png"

import styles from "./About.module.css";

export const About = () =>{
    return (
        <section className={styles.container}id="nosotras">
            <h2 className={styles.title}>Sobre nosotras</h2>
        <div className={styles.content}>
            <img src={bg} alt='icono' className='bg' />
            <ul>
                <li>
                    <div>
                        <h3>¿Quiénes somos?</h3>
                        <p>Nosotras somos estudiantes universitarias, con una gran pasión por aprender sobre el arte del diseño 
                         multimedia. Ésta página fue creada con el fin de mostrar nuestros trabajos y así darnos a conocer.</p>
                    </div>
                </li>
            </ul>


        </div>
        </section>
    )
} 