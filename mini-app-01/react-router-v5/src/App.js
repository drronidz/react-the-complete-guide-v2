import Route from "react-router-dom/es/Route";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./Pages/ProductDetail";

function App() {
    return (
        <div>
            <MainHeader/>
            <main>
                <Route path="/welcome">
                    <Welcome/>
                </Route>
                <Route path="/pr oducts">
                    <Products/>
                </Route>
                <Route path="/product-detail/:productId">
                    <ProductDetail/>
                </Route>
            </main>
        </div>
    );
}

export default App;

// our-domaine.com / welcome => Welcome Component ...
// our-domaine.com / products => Products Component ...