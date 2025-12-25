import React, { useState } from 'react'
import Cart from './Cart'
import ShoeList from './ShoeList'

function Main() {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {

        setCart((prevCart) => {

            // this line return if same item again add in to card
            const existingItem = prevCart.find((prevItem) => prevItem.id === item.id);

            if (existingItem) {

                return prevCart.map((prevItem) =>
                    prevItem.id === item.id ? { ...prevItem, qty: prevItem.qty + 1 } : prevItem
                );
            }

            return [...prevCart, { ...item, qty: 1 }];

        });
    }

    const handleIncreaseQty = (id) => {
        console.log(id);
        setCart(cart => cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item))
    }

    const handleDecreaseQty = (id) => {
        setCart(cart => cart.map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item).filter(item => item.qty > 0))
    }

    return (
        <>
            <div className="cart-section container mt-4">
                <div className="row">
                    <ShoeList addToCart={addToCart} />
                    <Cart cart={cart} handleIncreaseQty={handleIncreaseQty} handleDecreaseQty={handleDecreaseQty} />
                </div>
            </div>
        </>
    )
}

export default Main