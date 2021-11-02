import { useParams } from 'react-router-dom'
import articles from '../ArticlesDataFaker'
import { Article } from '../models/Article'

export default function ArticlesDetail() {
    let { id }: any = useParams<any>()
    let article: Article = articles.find(article => article.id = id) ?? articles[0]
    return (
        <div className="text-white pt-10 flex justify-center w-full">
            <div className="w-3/4">
                <h2 className="text-3xl mb-3">{article.title}</h2>
                <div className="bg-gray-400 h-40 w-full flex items-center justify-center mb-3 rounded">
                    <p>IMG</p>
                </div>
                <p>{article.content}</p>
            </div>
        </div>
    )
}
