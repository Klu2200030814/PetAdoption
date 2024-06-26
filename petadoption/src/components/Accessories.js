import React, { useState } from 'react';
import './ShowAccessories.css'; // Import CSS file for styling
import Header from './Header';
import { Link } from 'react-router-dom'; // Import Link from React Router

export default function ShowAccessories() {
    // Sample array of products
    const [products] = useState([
        { id: 1, name: "Dog Collar", price: 15, category: "collars", image: "https://source.unsplash.com/50x50/?dog-collar" },
        { id: 2, name: "Dog Food", price: 25, category: "dogfood", image: "https://source.unsplash.com/50x50/?dog-food" },
        { id: 3, name: "Cat Food", price: 20, category: "catfood", image: "https://source.unsplash.com/50x50/?cat-food" },
        { id: 4, name: "Bird Food", price: 10, category: "birdfood", image: "https://source.unsplash.com/50x50/?bird-food" }
    ]);

    // Initialize cart and total amount
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    // Function to add product to cart
    const addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingItemIndex = cart.findIndex(item => item.id === productId);
            if (existingItemIndex !== -1) {
                const updatedCart = [...cart];
                updatedCart[existingItemIndex].quantity += 1;
                setCart(updatedCart);
            } else {
                setCart([...cart, { ...product, quantity: 1 }]);
            }
            setTotalAmount(totalAmount + product.price);
        }
    }

    // Function to remove one quantity of a product from the cart
    const removeFromCart = (productId) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item.quantity > 0);

        const removedProduct = products.find(product => product.id === productId);
        if (removedProduct) {
            setCart(updatedCart);
            setTotalAmount(totalAmount - removedProduct.price);
        }
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="product-list">
                    {products.map(product => (
                        <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="product-details">
                                <span className="product-name">{product.name}</span>
                                <span className="product-price">${product.price}</span>
                                <button className="add-to-cart-btn" onClick={() => addToCart(product.id)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart">
                    <h2>Cart</h2>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <span>Quantity: {item.quantity}</span>
                                <span>${item.price * item.quantity}</span>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total Amount: ${totalAmount}</p>
                    <div className="center">
                        <Link to="/payment" className="buy-btn" style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>Buy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
