import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Redirect from "react-router-dom/es/Redirect";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/quotes"/>
                </Route>
                <Route path="/quotes" exact>
                    <AllQuotes/>
                </Route>
                <Route path="/quotes/:quoteId">
                    <QuoteDetail/>
                </Route>
                <Route path="/new-quote">
                    <NewQuote/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
