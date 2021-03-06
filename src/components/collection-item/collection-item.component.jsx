import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'
import {AddButton,CollectionImage,CollectionItemContainer,CollectionFooterContainer,NameContainer,PriceContainer} from './collection-item.styles'

const CollectionItem = ({item,addItem})=>
{ const {name,price,imageUrl}= item;
    return(
        <CollectionItemContainer>
             <CollectionImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
         <AddButton inverted onClick={()=> addItem(item)} className="collectionButton">Add to cart</AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch=>({
    addItem:item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);