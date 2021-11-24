import {Link} from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1> The Products Page...</h1>
            <ul>
                <li>
                    <Link to='/products/p1'>A BOOK</Link>
                </li>
                <li>
                    <Link to='/products/p2'>A CARPET</Link>
                </li>
                <li>
                    <Link to='/products/p3'>A TOY</Link>
                </li>
                <li>
                    <Link to='/products/p4'>An Online Course</Link>
                </li>
            </ul>
        </section>

    )
}

export default Products