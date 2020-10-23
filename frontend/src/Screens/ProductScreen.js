import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';


function ProductScreen (props){

    const [qty, setQty] =useState(1);
    const productDetails = useSelector(state =>state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return() => {
            //

        };
    },  []);
    
    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty" + qty)
    }

    return <div>
        <div className = "back">
            <Link to = "/">Return To Products</Link>
        </div>
        {loading? <div>Loading....</div>:
         error? <div>{error}</div>:
        (
            <div className = "details">
            <div className = "details-image">
                <img src = {product.image} alt="product"></img>
            </div>
            <div className = "details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars 
                    </li>
                    <li>
                        Rs.<b>{product.price}</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>

            </div>
            <div className = "details-action">
                <ul>
                    <li>
                        Price: {product.price}
                    </li>
                    <li>
                        Status: {product.countInstock >0? "In Stock": "OUT OF STOCK"}
                    </li>
                    <li>
                        Qty: <select value = {qty} onChange = {(e) => {setQty(e.target.value)}}>
                            {[...Array(product.countInstock).keys()].map(x =>
                                <option key ={x +1} value={x+1}>{x+1}</option>    /* array for qty counter */
                                )}
                        </select>
                    </li>
                    <li>
                        {product.countInstock>0 && <button onClick = {handleAddToCart}className = "button primary"> ADD TO CART</button>
                     
                    
                    }
                        
                    </li>
                </ul>

            </div>


        </div>

        )

        
    }
        

        
    </div>
}
export default ProductScreen;