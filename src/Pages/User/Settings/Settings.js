import { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Settings = () => {

    const redirectTo = useNavigate();

    useEffect(() => {

        if(!localStorage.getItem("user-info")) {

            return redirectTo("/");

        }

    }, [])

    return(
        <div className="col-lg-12 col-md-12 col-sm-12" id='bodyHeight'>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                            <div className="col-12">
                                <h3>Settings</h3>
                            </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div className="card-body border">
                                    <h6>My Total Products: <span>10</span></h6>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card-body border">
                                    <h6>My Approved Products: <span>10</span></h6>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card-body border">
                                    <h6>My Pending Products: <span>10</span></h6>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <div className="card-body border">
                                    <h6>My Total Orders: <span>10</span></h6>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <div className="card-body border">
                                    <h6>My Pending Orders: <span>10</span></h6>
                                </div>
                            </div>
                            <div className="col-4 mt-3">
                                <div className="card-body border">
                                    <h6>My Delivered Orders: <span>10</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="card-body">
                        <div className="row">
                            
                            <div className="col-4">
                                <div className="card-body border">
                                    <h4>Products</h4>
                                    <hr />
                                    <div className="row">
                                        <div className="col-6">
                                            <Link className='btn btn-success' to='/add-products'>Add Products</Link>
                                        </div>
                                        <div className="col-6">
                                        <Link className='btn btn-primary' to='/view-products'>View Products</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card-body border">
                                    <h4>Sample Heading</h4>
                                    <hr />
                                    <div className="row">
                                        <div className="col-6">
                                        <Link className='btn btn-success' to='#'>Sample Button</Link>
                                        </div>
                                        <div className="col-6">
                                        <Link className='btn btn-success' to='#'>Sample Button</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card-body border">
                                    <h4>Sample Heading</h4>
                                    <hr />
                                    <div className="row">
                                        <div className="col-6">
                                            <Link className='btn btn-success' to='#'>Sample Button</Link>
                                        </div>
                                        <div className="col-6">
                                        <Link className='btn btn-success' to='#'>Sample Button</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Settings;