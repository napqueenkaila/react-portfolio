import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import "./header.css"

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/">
                    <img className="header-logo" src={logo} alt="" />
                </NavLink>
                <NavLink to="/services">What I Do</NavLink>
                <NavLink to="/aboutme">Who I Am</NavLink>
                <NavLink to="/mywork">My Work</NavLink>
            </nav>
        </header>
    )
}