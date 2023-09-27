import aboutImg from "../assets/kaila-fish.png"
import './aboutme.css'

export default function AboutMe() {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Frontend React Developer</p>

            <div className="about-me__body">
                <p>After working in the marine industry for 4 years, I decided to try my hand at coding. Starting with
                    freeCodeCamp (check out my certificate for Responsive Web Design on LinkedIn!) I quickly found coding to
                    be both interesting and challenging. There's always more to learn (which I love)!</p>
                <p>In my free time, I enjoy playing with my cats, Maizy & Bloo, spending time with my family & friends, trying new things, reading books, going to concerts and Michigan Football games (go blue!).</p>
            </div>

            <img src={aboutImg} alt="Kaila holding up a net with a bass fish in it" className="about-me__img"/>
        </section>
    )
}