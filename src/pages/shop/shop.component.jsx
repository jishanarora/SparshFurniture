import React from 'react'
import ShopData from './shop.data'
import CollectionsPreview from '../../components/collections-preview/collections-preview.component'

class ShopPage extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            collections: ShopData
        }
    }
    render()
    {
        return(
            <div className="shop-page">
                {
                this.state.collections.map(({id, ...otherProps})=>(
                    <CollectionsPreview key={id} {...otherProps} />
                ))
                }
            </div>
        )
    }
}

export default ShopPage;