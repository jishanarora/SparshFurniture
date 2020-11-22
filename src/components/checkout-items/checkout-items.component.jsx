import React from 'react'
import './checkout-items.styles.scss'
import {connect} from 'react-redux';
import {removeItem,addItem,reduceItem} from '../../redux/cart/cart.actions'

const CheckoutItems =({cartItem,dispatch})=>{

const {name, imageUrl,price,quantity} = cartItem;
return(
    <div className='checkout-item'>
    <div className='image-container'>
    <img src={imageUrl} alt='item' />
        </div>    
    <span className='name'>{name}</span>  
    <span className='quantity'>
        <div className='arrow' onClick={()=>dispatch(reduceItem(cartItem))}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={()=>dispatch(addItem(cartItem))}>&#10095;</div>
        </span> 
    <span className='price'>${price}</span> 
    <div className='remove-button' onClick={()=>dispatch(removeItem(cartItem))}>&#10005;</div>   
</div>
);
}

export default connect(null)(CheckoutItems);

