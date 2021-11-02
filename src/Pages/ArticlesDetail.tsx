import { useParams } from 'react-router-dom'

export default function ArticlesDetail() {
    let { id }: any = useParams<any>()
    
    return (
        <div>
            <p>{id}</p>
        </div>
    )
}
