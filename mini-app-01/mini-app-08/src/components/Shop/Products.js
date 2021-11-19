import ProductItem from './ProductItem';
import classes from './Products.module.css';
import React from "react";

const DUMMY_PRODUCTS = [
    {id: 'p1', price: 6, title: 'BOOK 1', description: 'MY FIRST BOOK'},
    {id: 'p2', price: 6, title: 'BOOK 2', description: 'MY SECOND BOOK'},
    {id: 'p3', price: 6, title: 'BOOK 3', description: 'MY THIRD BOOK'}
]

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map(product => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />))}
            </ul>
        </section>
    );
};

export default Products;
