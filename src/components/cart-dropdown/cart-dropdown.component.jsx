import React from 'react'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {EmptyMessageContainer, CartDrowndownContainer, CartItemContainer,AddButton} from './cart-dropdown.styles'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'

const CartDropdown = ({cartItems,history,dispatch}) => (
    <CartDrowndownContainer>
        <CartItemContainer>
            {cartItems.length?(cartItems.map(cartItem=> (<CartItem key={cartItem.id} item={cartItem}/>))):
            (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)}
        </CartItemContainer>
        <AddButton onClick={()=>{history.push('/checkout'); dispatch(toggleCartHidden());}}>Go To Checkout</AddButton>
    </CartDrowndownContainer>
)

const mapStateToProps=createStructuredSelector(
{
cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps,null)(CartDropdown));