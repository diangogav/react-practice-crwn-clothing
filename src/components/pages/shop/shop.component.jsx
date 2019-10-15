import React from 'react';
import CollectionPreview from '../../collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: SHOP_DATA
        }
    }

    render() {
        return (
            this.state.collection.map(({ id, ...otherSectionProps }) => (
                <CollectionPreview key={id} {...otherSectionProps}></CollectionPreview>
            ))
        )
    }
}

export default Shop;