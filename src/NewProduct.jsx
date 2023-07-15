import { useState } from "react";

function NewProduct() {

    const [product, setProduct] = useState({
        brand: '',
        model: '',
        price: '',
        discount: '',
        inStock: false
    });

    const onInputChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };


    const onSave = () => {
        console.log(product);
        // send it to api
    };

    return (<div className="m-2">
        <div class="bg-gray-100 w-1/3 shadow-md rounded px-8 pt-2 pb-8 m-4">
            <h1 class="m-4 text-2xl font-semibold underline">Add New Product</h1>
            <div class="m-4">
                <input onChange={onInputChange} name="brand" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Brand" />
            </div>
            <div class="m-4">
                <input onChange={onInputChange} name="model" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Model" />
            </div>
            <div class="m-4">
                <input onChange={onInputChange} name="price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Price" />
            </div>
            <div class="m-4">
                <input onChange={onInputChange} name="discount" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Discount" />
            </div>
            <div class="m-4 flex items-center pl-4 border border-gray-300 rounded">
                <input onChange={onInputChange} name="inStock" id="bordered-checkbox-2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-checkbox-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">In Stock</label>
            </div>
            <div class="m-4">
                <button onClick={onSave} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Save
                </button>
            </div>
        </div>
    </div>);
}

export default NewProduct;