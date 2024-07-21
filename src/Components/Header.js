import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {

  const redirectTo = useNavigate();

  let user = JSON.parse(localStorage.getItem("user-info"));

  const logout = () => {
    
    localStorage.clear();
    redirectTo("/");
    window.location.reload();
    
  }

 
    return (
      <Fragment>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        id='navbarHeight'
      >
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="/">
              Mobi Health
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user && user.role_as === 0 ? 
              
              <Fragment>

                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <Link className="nav-link" to='/add-products'>Add Product</Link>
                  <Link className="nav-link" to='/view-products'>View Product</Link>
                </NavDropdown>

                <NavDropdown title="Orders" id="basic-nav-dropdown">
                  <Link className="nav-link">View Orders</Link>
                  <Link className="nav-link">View Pending Orders</Link>
                </NavDropdown>

              </Fragment>

              : "" }
            </Nav>

            <Nav className="ms-auto">
              {!localStorage.getItem("user-info")? 

              <Fragment>

                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>

                </Fragment> : <Fragment>


                <NavDropdown title={user.name} id="basic-nav-dropdown">
                  
                  <Link className='nav-link' to='/profile'>Profile</Link>

                  {user && user.role_as === 1 ? 
                    <>
                      <Link className='nav-link' to='/admin'>Admin Settings</Link>
                    </> 
                    : 
                    <>
                      <Link className='nav-link' to='/settings'>Settings</Link>
                    </>
                  }
                  <Link className='nav-link' onClick={logout}>Logout</Link>

                </NavDropdown>

              </Fragment>
              
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Fragment>
    );
}

export default Header;