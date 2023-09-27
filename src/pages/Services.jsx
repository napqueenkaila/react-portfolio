import { NavLink } from "react-router-dom"
import "./services.css"

export default function Services() {
    return (
        <section className="my-services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" alt="HTML Badge"></img>
                </div>

                <div className="service">
                    <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge"></img>
                </div>

                <div className="service">
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge"></img>
                </div>
                <div className="service">
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge"></img>
                </div>
                <div className="service">
                    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge"></img>
                </div>
                <div className="service">
                    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router Badge"></img>
                </div>
            </div>

            <NavLink href="/mywork" className="btn">My Work</NavLink>
        </section>
    )
}