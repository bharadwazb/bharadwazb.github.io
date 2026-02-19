import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar">
            <span className="navbar__brand">bharadwazb</span>
            <ul className="navbar__links">
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/experience"    >Experience</NavLink></li>
                <li><NavLink to="/education"     >Education</NavLink></li>
            </ul>
        </nav>
    )
}
