import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UpdateProduct = () => {


    const {id} = useParams();

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: ''
    });
    const [image, setImage] = useState('');


    const handleInput = (event) => {

        setProduct({...product, [event.target.name] : event.target.value});

    }
   
    
    const getSingleProduct = async () => {

        let data = await fetch("http://localhost:8000/api/product/" + id + '/edit');
        data = await data.json();
        setProduct(data);
        

    }

    const handleSubmit = async (event) => {

        event.preventDefault();

        const formData = new FormData();

        formData.append('_method', 'PUT');
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('image', image.name);

        formData.forEach((item) => {
            console.log(item);
        })

        axios.post("http://localhost:8000/api/product/" + id + "/edit", formData, {
            method: 'PUT',
            headers: {"Content-Type": "multipart/form-data"}
        }).then((res) => {
            console.log(res);
        })    

    }

    useEffect(() => {
        getSingleProduct();
    }, [id])

    
    


    return(
        <div className="col-lg-12 col-md-12 col-sm-12" id="bodyHeight">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h3>Update Product</h3>
                                <h4 className='text-success mt-3'>{successMessage ? successMessage : ""}</h4>
                                <h4 className='text-danger mt-3'>{errorMessage ? errorMessage : ""}</h4>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
                                <Link className='btn btn-primary' to='/view-products'>Back</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="" className="form-label">Name: </label>
                                <input type="text" className="form-control" name="name" value={product.name} onChange={handleInput}/>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="" className="form-label">Description: </label>
                                <textarea type="text" className="form-control" name="description" value={product.description} onChange={handleInput}/>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="" className="form-label">Price: </label>
                                <input type="text" className="form-control" name="price" value={product.price} onChange={handleInput}/>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="" className="form-label">Image: </label>
                                <img src={"http://localhost:8000/" + product.image_path} alt={product.name} className="img-fluid mb-3" style={{width: "100px", height: "50px"}} />
                                <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])}/>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="btn btn-success">Update Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct;