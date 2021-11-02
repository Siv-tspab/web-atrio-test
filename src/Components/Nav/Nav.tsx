import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <header className="flex bg-black text-white">
            <h1 className="nav-link font-semibold">RobotDemoApp</h1>
            <ul className="flex">
                <li className="nav-link">
                    <Link to="/">
                        Accueil
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/articles">
                        Liste des articles
                    </Link>
                </li>
            </ul>
        </header>
    )
}
