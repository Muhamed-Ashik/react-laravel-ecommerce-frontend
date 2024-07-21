import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ViewAllProducts = () => {

    const [data, setData] = useState([]);
    const [successMessage, setSuccessMessage]  = useState('');
    const [errorMessage, setErrorMessage]  = useState('');

    const fetchAllProducts = async () => {

        let result = await fetch("http://localhost:8000/api/products");
        result = await result.json();
        setData(result);
    }

    
    const deleteProduct = async (id) => {

        let result = await fetch("http://localhost:8000/api/delete-product/" + id, {
            method: 'DELETE'
        })

        result = result.json();

        if(!result) {
            
            return setErrorMessage("Unable to delete the product");
            
        }
        
        fetchAllProducts();
        return setSuccessMessage("Product deleted successfully");
        
        
    }

    useEffect(() => {
        fetchAllProducts();
    }, [])
    
    return(
        <div className="col-lg-12 col-md-12 col-sm-12" id="bodyHeight">
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h3>Product List</h3>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
                                <Link className='btn btn-success' to='/add-product'>Add Product</Link>
                                <Link className='btn btn-primary' to='/settings'>Settings</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-responsive table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((product, index) => 
                                    <tr key={index}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>Rs: {product.price}</td>
                                        <td>
                                            <img src={'http://localhost:8000/'+product.image_path} alt={product.name} className="img-fluid" style={{width: "100px", height: "70px" }}/>
                                        </td>
                                        <td>
                                            <Link className='btn btn-warning' to={'/product/' + product.id + '/edit'}>Edit Product</Link>
                                            <Link className='btn btn-danger' onClick={() => deleteProduct(product.id)}>Delete Product</Link>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllProducts;