import { Routes, Route } from 'react-router-dom';

import AddProduct from '../Pages/Products/AddProduct.js';
import UpdateProduct from '../Pages/Products/UpdateProduct.js';
import Login from '../Pages/Login.js';
import Register from '../Pages/Register.js';
import ViewAllProducts from '../Pages/Products/ViewAllProducts.js';
import AdminDashboard from '../Pages/Admin/AdminDashboard.js';
import Home from '../Pages/User/Home.js';
import ViewProfile from '../Pages/User/Profile/ViewProfile.js';
import Settings from '../Pages/User/Settings/Settings.js';

const UserRoutes = () => {
    return(
        <>
        <Routes>

          {/* ----------- User Routes -------------------- */}
          <Route path='/' element={<Home />}/>

        {/* Products  */}
          <Route path='/add-products' element={<AddProduct />}/>
          <Route path='/product/:id/edit' element={<UpdateProduct />}/>
          <Route path='/view-products' element={<ViewAllProducts />}/>

        {/* Login and Register */}
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>

        {/* Profile */}
        <Route path='/profile' element={<ViewProfile />}/>

        {/* Settings Section */}
        <Route path='/settings' element={<Settings />}/>



          {/* --------------- Admin Routes ------------------- */}
          <Route path='/admin' element={<AdminDashboard />}/>

        </Routes>      
      </>
    )
}

export default UserRoutes;