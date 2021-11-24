import {useParams} from 'react-router-dom'
import {Fragment} from "react";
import Route from "react-router-dom/es/Route";
import Comments from "../components/comments/Comments";


const QuoteDetail = () => {
    const params = useParams()
    const quoteId = params.quoteId
    return (
        <Fragment>
            <h1>Quote Detail PAGE</h1>
            <p>{quoteId}</p>
            <Route path={`/quotes/${quoteId}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    )
}

export default QuoteDetail