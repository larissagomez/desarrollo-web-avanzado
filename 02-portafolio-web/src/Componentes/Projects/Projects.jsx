import React from 'react'
import projects from "../data/projects.json"
import { ProjectCard } from './ProjectCard'
import styles from "./Projects.module.css"

export const Projects = () => {
  return (
    <section className={styles.container}id="proyectos">
        <h2 className={styles.title}>Proyectos</h2>
        <div className={styles.projects}>
            {projects.map((projects, id) => {
                return <ProjectCard key={id} projects={projects}/>
            })}
        </div>
    </section>
    )
}