// presentation component
function ProductItem(props) {
    const { product } = props;
    return <div>
        <h3>{product.brand} {product.model}</h3>
        <h4>${product.price}</h4>
        <div>In stock: {product.inStock ? 'Yes' : 'No'}</div>
        {
            product.inStock ?
                <>
                    <button>Buy Now</button>
                    <button>Add to Cart</button>
                </>
                : <button>Notify me</button>
        }
        <hr />
    </div>;
}

export default ProductItem;

// Functional component
// Properties, destructering
// interpolation {}
// conditional rendering
// render list of items
// container 
// presentation 
// state
// compnent is either class or a function
// properties
// ui or null