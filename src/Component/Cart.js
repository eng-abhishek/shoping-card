import React from 'react'
import Img1 from '../assets/images/1.jpg'
import Img2 from '../assets/images/2.jpg'
import Img3 from '../assets/images/3.jpg'
import Img4 from '../assets/images/4.jpg'
import Img5 from '../assets/images/5.jpg'
import Img6 from '../assets/images/6.jpg'

export default function Cart({ cart, handleDecreaseQty, handleIncreaseQty }) {

    // Using loop
    // let totalAmt = 0;

    // for (let item of cart) {
    //     totalAmt += item.price * item.qty
    // }

    // Using Reduce
    const totalAmt = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
    );

    return (
        <>
            <div className="col-md-4">
                <div className="cart-box">
                    <h4>Cart</h4>
                    <hr />
                    <div id="cart-items">
                        {cart.length === 0 && <p> Cart Is Empty </ p>}
                        {cart.map((cartItems) =>
                            <div className="d-flex justify-content-between align-items-center mb-2" key={cartItems.id}>
                                <div>
                             <img src={cartItems.image} alt={cartItems.name} width="60" height="60" style={{ objectFit: "cover", borderRadius: "6px" }}
                                    ></img>
                                </div>
                                <div>
                                    <strong>{cartItems.name}</strong><br />
                                    ₹{cartItems.price * cartItems.qty}
                                </div>
                                <div className="d-flex align-items-center">
                                    <button className="btn btn-sm btn-danger qty-btn"
                                        onClick={() => handleDecreaseQty(cartItems.id)}>−</button>
                                    <span className="mx-2">{cartItems.qty}</span>
                                    <button className="btn btn-sm btn-success qty-btn"
                                        onClick={() => handleIncreaseQty(cartItems.id)}>+</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <hr />
                    <h5>Total: ₹<span id="total">{totalAmt}</span></h5>
                </div>
            </div>
        </>
    )
}