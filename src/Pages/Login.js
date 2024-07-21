import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const redirectTo = useNavigate();
  const [inputs, setInputs] = useState({email: "", password: ""});
  const [errorMessage, setErrorMessage] =  useState("");



  // useEffect(() => {

  //   if(localStorage.getItem("user-info")) {
  //     redirectTo("/");
  //   }

  // }, []);
  

  const handleChange = (event) => {

    setInputs({...inputs, [event.target.name] : event.target.value});
    
  }

  const handleSubmit = async (event) => {

    event.preventDefault();


    try{

      const data = {
        email: inputs.email,
        password: inputs.password
      }
  
      let result = await fetch("http://localhost:8000/api/login", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": 'application/json',
          "Accept": "application/json"
        }
        
      })
  
      result = await result.json();
  
      if(result.email && result.password && result.role_as === 0) {
  
        localStorage.setItem("user-info", JSON.stringify(result));
        return redirectTo("/");
        
  
      } else if(result.email && result.password && result.role_as === 1) {

        localStorage.setItem("user-info", JSON.stringify(result));
        return redirectTo("/admin");

      } else {
        
        return setErrorMessage("Email or Password Incorrect");

      }

  

    } catch(err) {

      return "err";

    }

    
    

  }

  

    return(
        <div
        className="login"
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
                    <h3>Login</h3>
                    <h4 className="text-danger">{errorMessage ? errorMessage : ""}</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
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
                          Login
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
    )
}

export default Login;