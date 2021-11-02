import { Link } from "react-router-dom";
import { Article } from "../../models/Article";
import Button from "../Button/Button";

export default function ArticleCard({ article }: { article: Article }) {
    return (
        <div className="bg-white p-3 rounded-lg">
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <div className="h-1 w-20 bg-gray-600"></div>
            <p className="max-w-md py-3">{article.content}</p>
            <div className="flex justify-center transform translate-y-9">
                <Button styles="px-14">
                    <Link to={"/articles/" + article.id}>
                        Découvrir
                    </Link>
                </Button>
            </div>
        </div>
    )
}
