import { Link } from 'react-router-dom'

const MainHeader = () => {
    return (
        <header>
            <nav>
                <li>
                    <Link to="/welcome">Welcome</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </nav>
        </header>
    )
}

export default MainHeader