import articles from "../ArticlesDataFaker"
import ArticleCard from "../Components/ArticleCard/ArticleCard"
import { Article } from "../models/Article"


export default function ArticlesList() {

    return (
        <div className="flex flex-wrap items-center justify-center">
            {articles.map((article: Article) => (
                <div key={article.id} className="m-5 w-max" >
                    <ArticleCard article={article} />
                </div>
            ))}
        </div>
    )
}
