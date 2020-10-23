import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, removeFromCart} from '../actions/cartActions';
import {Link} from 'react-router-dom';
function CartScreen(props){

    const cart = useSelector(state => state.cart);

    const {cartItems} = cart;
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) =>{
        dispatch(removeFromCart(productId));

    }
    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, []);

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
    }


    return <div className = "cart">
        <div className = "cart-list">
            <ul className = "cart-list-container">
                <li>
                    <h3>
                        SHOPPPING CART
                    </h3>
                    <div>
                        PRICE
                    </div>
                </li>
                {
                    cartItems.length ===0 ?
                    <div>
                        Cart is Empty
                    </div>
                    :
                    cartItems.map( item =>
                     <li>
                        <div>
                            <div className = "cart-image">
                            <img src={item.image} alt="product"/>

                            </div>
                            
                            <div className = "cart-name">
                                <div>
                                    <Link to = {"/product" + item.product}>
                                    {item.name}

                                    </Link>
                                </div>
                                
                            </div>
                            <div>
                                Qty:
                                <select value ={item.qty} onChange = {(e) => dispatch(addToCart(item.product, e.target.value))}>
                                    <option valu="1">1</option>
                                    <option valu="2">2</option>
                                    <option valu="3">3</option>
                                    
                                </select>
                                <button type = "button" className = "button" onClick = {() => removeFromCartHandler(item.product)}>
                                    Delete
                                </button>

                            </div>

                            <div className = "cart-price">
                                 {item.price}
                            </div>   
                        </div>
                        </li>
                        )
                }

            </ul>

        </div>
        <div className = "cart-action">
            <h3>
                Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
                :
                  $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </h3>
            <button onClick = {checkoutHandler} className ="button primary full-width" disabled ={cartItems.length === 0}>
                CHECKOUT
            </button>
            

        </div>
    </div>

}


export default CartScreen;