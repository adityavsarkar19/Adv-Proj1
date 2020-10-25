import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

function productListReducer(state= {products: []}, action){


    /* reducer function determines changes to the application’s state. 
    It uses the action it receives to determine this change. */

    switch(action.type){
        case PRODUCT_LIST_REQUEST:   
            return {loading: true};                /* reducer function using product actions to determine changes for Product Lists*/
        
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload };  
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}


function productDetailsReducer(state= {product: {}}, action){

    switch(action.type){                           /* reducer function using product actions to determine changes for Product Details*/
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload };  
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}
export {productListReducer, productDetailsReducer}