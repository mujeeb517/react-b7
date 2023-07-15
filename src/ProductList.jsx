import React from 'react';
import axios from './utils/axios';
import Error from './Error';
import ProductItem from './ProductItem';
// container component

// 1. create a component (function or class)
// 2. Define a route
// 3. test 
// 3. define state
// 4. fetch data from api
// 5. update the state
// 6. render products
// 7. handle errors
// 8. Refactor
// container & presentation
// life cycle methods
// 1. constructor: 1x
// 2. componentDidMount: 1x
// 3. componentDidUpdate: nX
// 4. componentWillUnMount: 1x

class ProductList extends React.Component {

    state = {
        products: [],
        hasError: false
    }

    fetch = () => {
        axios().get('/api/products')
            .then(res => this.setState({ products: res.data.data }))
            .catch(err => this.setState({ hasError: true }));
    }

    componentDidMount(){
        this.fetch();
    }

    onNotification = () => {
        this.fetch();
    }

    render() {
        return <div>
            <h1 className="text-2xl m-2 font-semibold">Products</h1>
            {this.state.hasError && <Error />}
            {this.state.products.map(product => <ProductItem product={product}
                onNotify={this.onNotification} />)}
        </div>
    }

}

export default ProductList;