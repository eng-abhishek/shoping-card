import React from 'react'

import Img1 from '../assets/images/1.jpg'
import Img2 from '../assets/images/2.jpg'
import Img3 from '../assets/images/3.jpg'
import Img4 from '../assets/images/4.jpg'
import Img5 from '../assets/images/5.jpg'
import Img6 from '../assets/images/6.jpg'

function ShoeList({ addToCart }) {

    const productList = [
    {
        id: 1,
        name: "Nike Air Zoom",
        price: 1014,
        image: Img1,
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        price: 1015,
        image: Img2,
    },
    {
        id: 3,
        name: "Puma Velocity Nitro",
        price: 1016,
        image: Img3,
    },
    {
        id: 4,
        name: "Reebok Floatride",
        price: 1017,
        image: Img4,
    },
    {
        id: 5,
        name: "New Balance Fresh Foam",
        price: 1018,
        image: Img5,
    },
    {
        id: 6,
        name: "Asics Gel Nimbus",
        price: 1018,
        image: Img6,
    },
    ];

    return (
        <>
            <div className="col-md-8">
                <h3 className="mb-3">Available Shoes</h3>
                <div className="row g-3">
                    {
                        productList.map((item) => (
                            <div className="col-md-6" key={item.id}>
                                <div className="card">
                                    <img src={item.image} className="card-img-top shoe-img h-200" />
                                    <div className="card-body text-center">
                                        <h6>{item.name}</h6>
                                        <p>₹{item.price}</p>
                                        <button className="btn btn-primary btn-sm" onClick={() => addToCart(item)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default ShoeList