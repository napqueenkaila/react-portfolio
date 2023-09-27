import { useEffect, useState } from "react"
import { getProjects } from "../firebase"
import "./mywork.css"

export default function MyWork() {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function loadProjects() {
            setLoading(true)
            try {
                const data = await getProjects()
                setProjects(data)
                console.log(data)
            } catch (err) {
                console.log(err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadProjects()
    }, [])
    
    const projectElements = projects.map(project => (
        <div key={project.id} className="project-tile">
            <img src={project.image} className="project-img" alt={project.name} />
            <div className="project-info">
                <p className="project-name">{project.name}</p>
                <div className="links">
                    <a className="project-link" href={project.link} target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    <a className="project-repo" href={project.repo} target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    ))



    
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section className="project-container">
            {projectElements}
        </section>
    )
}
