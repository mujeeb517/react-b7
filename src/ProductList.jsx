import ProductItem from "./ProductItem";
// container component
function ProductList() {

    const data = [
        { id: 1, brand: 'Apple', model: 'Iphone 13', price: 1000, inStock: true },
        { id: 2, brand: 'Apple', model: 'Iphone 14', price: 1100, inStock: false },
        { id: 3, brand: 'Apple', model: 'Iphone 14 Plus', price: 1200, inStock: true }
    ];

    return <>
        <h1>Product List</h1>
        {
            data.map(function (p) {
                return <ProductItem product={p} />
            })
        }
    </>

}

export default ProductList;
