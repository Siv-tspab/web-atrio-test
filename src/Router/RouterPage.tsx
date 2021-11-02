import Nav from "../Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ArticlesList from "../Pages/ArticlesList";
import ArticlesDetail from "../Pages/ArticlesDetail";

export default function RouterPage() {
    return (<div className="bg-gray-600 pb-5 min-h-screen">
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/articles" component={ArticlesList} />
                <Route path="/articles/:id" component={ArticlesDetail} />
            </Switch>
        </Router>
    </div>
    )
}
