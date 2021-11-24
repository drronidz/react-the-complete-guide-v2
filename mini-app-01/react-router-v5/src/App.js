import Route from "react-router-dom/es/Route";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./Pages/ProductDetail";
import Switch from "react-router-dom/es/Switch";

function App() {
    return (
        <div>
            <MainHeader/>
            <main>
                <Switch>
                    <Route path="/welcome">
                        <Welcome/>
                    </Route>
                    <Route path="/products" exact>
                        <Products/>
                    </Route>
                    <Route path="/products/:productId">
                        <ProductDetail/>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;

// our-domaine.com / welcome => Welcome Component ...
// our-domaine.com / products => Products Component ...