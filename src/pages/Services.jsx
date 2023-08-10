import { NavLink } from "react-router-dom"

export default function Services() {
    return (
        <section className="my-services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>HTML & CSS</h3>
                    <p></p>
                </div>

                <div className="service">
                    <h3>JavaScript</h3>
                    <p></p>
                </div>

                <div className="service">
                    <h3>React</h3>
                    <p></p>
                </div>
            </div>

            <NavLink href="/mywork" className="btn">My Work</NavLink>
        </section>
    )
}