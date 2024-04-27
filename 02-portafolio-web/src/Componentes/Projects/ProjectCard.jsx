import React from 'react'
import { getImageUrl } from "../../utils"
import styles from "./ProjectCard.module.css"

export const ProjectCard = ({projects: {title, imageSrc, description}}) => {
  return (
    <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
    </div>
  )
}
