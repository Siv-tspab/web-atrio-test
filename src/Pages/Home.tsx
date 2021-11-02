import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";

export default function Home() {
    return (
        <div className="w-full flex items-center justify-center text-white mt-20">
            <div className="block text-center">

                <h2 className="text-xl mb-5">Bienvenue sur votre page d'accueil</h2>
                <p className="text-gray-400 mb-5">Test technique pour les développeurs Angular, React ou Vue.js</p>
                <Button>
                    <Link to="/articles">
                        Voir la liste des articles
                    </Link>
                </Button>
            </div>
        </div>
    )
}
