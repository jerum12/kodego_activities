import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar () {
    return <nav className="nav">
        <Link to="/" className="site-title">
            Activity-3-ReactJS
        </Link>
        <ul>
            <CustomLink to="/counting">Counting</CustomLink>
            <CustomLink to="/form">Form</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
        </li>
    )
}