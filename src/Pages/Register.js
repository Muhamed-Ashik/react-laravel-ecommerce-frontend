import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const redirectTo = useNavigate();
    const [inputs, setInputs] = useState({name: '', email: '', password: ''});
    const [inputEmptyMessage, setInputEmptyMessage] = useState("");

    useEffect(() => {

      if(localStorage.getItem("user-info")) {
        redirectTo("/add-product");
      }

    }, [])

    

    const handleChange = (event) => {

        setInputs({...inputs, [event.target.name]: event.target.value});

    }
    

    const handleSubmit = async (event) => {

      event.preventDefault();

      if(!inputs.name || !inputs.email || !inputs.password) {

        setInputEmptyMessage("Please fill all the  fields");

      } else {
        

        try{
            let result = await fetch("http://localhost:8000/api/register", {
                method: 'POST',
                body: JSON.stringify(inputs),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            })
    
            result = await result.json();
              return redirectTo('/login');

        } catch(err) {

            console.log(err);

        }


      }

        
        

    }


   


  return (
    <div
      className="register"    
      id="bodyHeight"
    >
      <div className="container-fluid">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            <div
              className="col-md-8"
            >
              <h2>Image Goes Here</h2>
            </div>
            <div
              className="col-md-4"
            >
              <div className="card">
                <div className="card-header">
                  <h3>Register</h3>
                  <h4 className="text-danger">{inputEmptyMessage ? inputEmptyMessage : ""}</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Name:{" "}
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="" className="form-label">
                        Email:{" "}
                      </label>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="" className="form-label">
                        Password:{" "}
                      </label>
                      <input
                        type="text"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <button type="subimt" className="btn btn-primary">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
