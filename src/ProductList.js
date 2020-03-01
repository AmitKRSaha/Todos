import React from 'react';
import './ProductList.css';

export function ProductList() {
    const ListofProduct = [
        {
            "Name": "Books",
            "Rating": "4"
        },
        {
            "Name": "Movies",
            "Rating": "5"
        },
        {
            "Name": "Beauty",
            "Rating": "4.5"
        },

    ];
    var items = ListofProduct.map(m => <p className="ListItems">{m.Name}</p>);
    return (
        <div className="ProductList">
            <h2>From Product List</h2>
            <div className="Items">
                {items}
            </div>
        </div>
    );

}

