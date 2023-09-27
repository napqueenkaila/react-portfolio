import introImg from "../assets/kaila.png"
import "./intro.css"

export default function Intro() {
    return (
        <section className="intro">
            <h1 className="section__title section__title--intro">Hi, I am <strong>Kaila Bullard</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src={introImg} className="intro__img" alt="a picture of Kaila Bullard smiling"/>
        </section>
    )
}