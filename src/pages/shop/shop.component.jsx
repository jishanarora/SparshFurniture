import React from 'react'
import CollectionsPreview from '../../components/collections-preview/collections-preview.component'
import {createStructuredSelector} from 'reselect'
import {selectCollectionItemsData} from '../../redux/collection-items/collection-items.selectors'
import {connect} from 'react-redux'


const ShopPage =({collections}) =>
(
            <div className="shop-page">
                {
                collections.map(({id, ...otherProps})=>(
                    <CollectionsPreview key={id} {...otherProps} />
                ))
                }
            </div>  
           
           )

 const mapStateToProps = createStructuredSelector({
     collections: selectCollectionItemsData
 })

export default connect(mapStateToProps,null)(ShopPage);