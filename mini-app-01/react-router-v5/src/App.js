import Route from "react-router-dom/es/Route";
import Welcome from "./components/Welcome";
import Products from "./components/Products";

function App() {
    return (
        <div>
            <Route path="/welcome">
                <Welcome/>
            </Route>
            <Route path="/products">
                <Products/>
            </Route>
        </div>
    );
}

export default App;

// our-domaine.com / welcome => Welcome Component ...
// our-domaine.com / products => Products Component ...