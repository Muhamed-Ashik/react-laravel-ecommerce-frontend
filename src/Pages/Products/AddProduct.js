import React, {createContext, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";



const AddProduct = () => {

    const redirectTo = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {

        event.preventDefault();
        const formData = new FormData();

        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', image);

        let result = await fetch("http://localhost:8000/api/add-product", {
            method: 'POST',
            body: formData,
        })

        console.log(result.status);

        if(result.status === 204) {

            redirectTo("/view-products");
            return setSuccessMessage("Product stored successfully");
            
        } else {
            
            return setErrorMessage("Unable to save the product!");

        }


    }

    return(
        <div className="col-lg-12 col-md-12 col-sm-12" id='bodyHeight'>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h3>Add Product</h3>
                                <h4 className='text-success mt-3'>{successMessage ? successMessage : ""}</h4>
                                <h4 className='text-danger mt-3'>{errorMessage ? errorMessage : ""}</h4>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className=' d-flex justify-content-end'>
                                    <Link className="btn btn-success " to='/view-products'>View Products</Link>
                                    <Link className="btn btn-primary " to='/settings'>Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="" className="form-label">Name: </label>
                                <input type="text" className="form-control" placeholder="Name" name="name" value={name} onChange={(event) => setName(event.target.value)}/>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="" className="form-label">Description: </label>
                                <input type="text" className="form-control" placeholder="description" name="description" value={description} onChange={(event) => setDescription(event.target.value)}/>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="" className="form-label">Price: </label>
                                <input type="text" className="form-control" placeholder="Price" name="price" value={price} onChange={(event) => setPrice(event.target.value)}/>  
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="" className="form-label">Image: </label>
                                <input type="file" className="form-control" placeholder="File" name="image" onChange={(event) => setImage(event.target.files[0])}/>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="btn btn-success">Save Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;