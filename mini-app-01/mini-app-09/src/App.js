import {Route} from 'react-router-dom'
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import {Routes} from "react-router";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
    return (
        <div>
            <MainHeader/>
            <main>
                <Routes>
                    <Route path="/welcome" element={ <Welcome/> } />
                    <Route path="/products" element={ <Products/> } />
                    <Route path="/product-detail/:productId" element={ <ProductDetail/> } />
                </Routes>
            </main>
        </div>
    );
}

export default App;

// our-domain.com/welcome