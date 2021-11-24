import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from 'react-router-dom'

const NewQuote = () => {
    const history = useHistory()

    const addQuoteHandler= quoteDATA => {
        console.log(quoteDATA)


        history.push('/quotes')
    }

    return <QuoteForm onAddQuote={addQuoteHandler}/>
}

export default NewQuote