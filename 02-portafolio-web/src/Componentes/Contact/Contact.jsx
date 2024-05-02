import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return ( 
  <footer id="contacto" className={styles.container}>
    <div className={styles.text}>
        <h2>Contacto</h2>
        <p>Te castigaré en nombre de la Luna ᕦ(ò_óˇ)ᕤ</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/iconEmail.png")} alt="Email icon" />
            <a href="190854@mail.unacar.mx">190854@mail.unacar.mx</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/iconEmail.png")} alt="Email icon" />
            <a href="190854@mail.unacar.mx">164135@mail.unacar.mx</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/iconEmail.png")} alt="Email icon" />
            <a href="190854@mail.unacar.mx">152880@mail.unacar.mx</a>
        </li>
    </ul>
  </footer>
  )
}
