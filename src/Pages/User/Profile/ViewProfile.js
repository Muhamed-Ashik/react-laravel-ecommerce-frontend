import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ViewProfile = () => {

    const redirectTo = useNavigate();

    const [logedUser, setLogedUser] = useState('');
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    });

// localsotrage set and redirect method
    useEffect(() => {

        if(localStorage.getItem("user-info")) {

            setLogedUser(JSON.parse(localStorage.getItem("user-info")));

        } else {

            return redirectTo("/");

        }

    }, []);

    // Input handle method
    const handleChange = (event) => {
        setInputs({...inputs, [event.target.name]: event.target.value});
    }

    // Update Function
    const handleSubmit = async (event) => {

        event.preventDefault();
        const id = logedUser.id;

        let data = {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password
        }

        try{

            axios.put("http://localhost:8000/api/profile/" + id, data,{
                method: "PUT",
            }).then(res => {
                if(res.status === 200) {

                    localStorage.clear();
                    localStorage.setItem("user-info", JSON.stringify(res.data.data));
                    window.location.reload();

                } 
            });

        } catch(err) {
            console.log(err);
        }

       

    }

    return(
        <div className="col-12" id="bodyHeight">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-6">
                                <h3>Profile</h3>
                            </div>
                            <div className="col-6">
                                <Link className="btn btn-primary">Back</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="col-12 card-header">
                                    <h6>Name: {logedUser.name}</h6>
                                </div>
                                <div className="col-12 card-header mt-4">
                                    <h6>Email: {logedUser.email}</h6>
                                </div>
                                <div className="col-12 card-header mt-4">
                                    <h6>Password: <span className="text-danger">Hidden</span></h6>
                                </div>
                            </div>
                            <div className="col-6">
                               <form onSubmit={handleSubmit}>
                                    <div className="col-12">
                                        <label htmlFor="" className="form-label">Name: </label>
                                        <input type="text" className="form-control" name="name" placeholder="Ex: Ashik" onChange={handleChange}/>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label htmlFor="" className="form-label">Email: </label>
                                        <input type="text" className="form-control" name="email" placeholder="Ex: ashik@gmail.com" onChange={handleChange}/>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label htmlFor="" className="form-label">Password: </label>
                                        <input type="text" className="form-control" name="password" placeholder="Ex: xxxxxxx" onChange={handleChange}/>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button type="submit" className="btn btn-success">Save Changes</button>
                                    </div>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProfile;