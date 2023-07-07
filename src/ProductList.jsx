import React from 'react';
import axios from 'axios';
// container component

// 1. create a component (function or class)
// 2. Define a route
// 3. test 
// 3. define state
// 4. fetch data from api
// 5. update the state
// 6. render products
// 7. handle errors

class ProductList extends React.Component {

    state = {
        products: [],
        hasError: false
    }

    constructor() {
        super();
        const headers = {
            authorization: 'Bearer ' + localStorage.getItem('token')
        };
        axios.get('https://fsa-api-b6.onrender.com/api/products', { headers: headers })
            .then(res => this.setState({ products: res.data.data }))
            .catch(err => this.setState({ hasError: true }));
    }

    // actual price: 1000
    // discount 10% : 1000 * 10/100 = 100
    // final: actual price - discounted amount
    // final: 1000-100

    render() {
        return <div>
            <h1 className="text-2xl m-2 font-semibold">Products</h1>
            {
                this.state.hasError ?
                    <div className="p-2 m-2 text-red-600 font-semibold bg-gray-200 rounded">
                        Something went wrong, please try again later
                    </div> : null
            }
            {
                this.state.products.map(product => <div className="w-1/3 m-4">
                    <h1 className="font-semibold">{product.brand} {product.model}</h1>
                    <img src={product.image} />
                    {product.discount > 0 ?
                        <>
                            <h1 className="line-through">${product.price}</h1>
                            <h1>${product.price - (product.price * (product.discount / 100))}</h1>
                        </> :
                        <h1 className="">${product.price}</h1>
                    }

                    {product.inStock ?
                        <div className="flex">
                            <button className="bg-orange-500 px-2 py-1 text-white rounded m-2 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                Buy Now
                            </button>
                            <button className="bg-orange-500 px-2 py-1 text-white rounded m-2 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                Add to cart
                            </button>
                        </div> :
                        <div>
                            <button className="bg-orange-500 px-2 py-1 text-white rounded m-2 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                Notify Me
                            </button>
                        </div>
                    }

                </div>)
            }
        </div>
    }

}

export default ProductList;