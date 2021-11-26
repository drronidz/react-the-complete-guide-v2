import {Link, useParams, useRouteMatch} from 'react-router-dom'
import {Fragment} from "react";
import Route from "react-router-dom/es/Route";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun!'},
    { id: 'q2', author: 'John', text: 'Learning Java is great!'}
]

const QuoteDetail = () => {
    const params = useParams()
    const quoteId = params.quoteId
    const match = useRouteMatch()

    const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId)

    console.log(match)

    if (!quote) {
        return (
            <p>No similar quote found!</p>
        )
    }

    return (
        <Fragment>
           <HighlightedQuote text={quote.text} author={quote.author}/>
           <Route path={match.path} exact>
               <div className="centered">
                   <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
               </div>
           </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    )
}

export default QuoteDetail