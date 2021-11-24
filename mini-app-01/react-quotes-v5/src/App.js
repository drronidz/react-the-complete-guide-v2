import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
      <Switch>
        <Route path="/quotes" exact>
            <AllQuotes/>
        </Route>
        <Route path="/quotes/:quoteId">
            <QuoteDetail/>
        </Route>
        <Route path="/new-quote">
            <NewQuote/>
        </Route>
      </Switch>
  );
}

export default App;