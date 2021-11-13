import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';
const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        fetch('https://aqueous-depths-03250.herokuapp.com/addProduct', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('New Product has been added!');
                    reset();
                }
            })

    };

    return (
        <div className="w-11/12 mx-auto flex flex-col items-center justify-center">
            <h3 className="text-3xl text-center font-semibold
         text-green-800 font-mono my-4">
                Add A New Product</h3>

            <form className="package-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Name"  {...register("name", { required: true })} />
                <input placeholder="image url" {...register("img", { required: true })} />
                <input type="text" placeholder="details" defaultValue="" {...register("details", { required: true })} />
                <input type="number" placeholder="price" defaultValue="" {...register("price", { required: true })} />
                <input className="bg-green-900 text-white cursor-pointer font-semibold"
                    type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;