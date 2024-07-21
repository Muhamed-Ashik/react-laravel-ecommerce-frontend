import Header from './Components/Header.js';
import './App.css';
import Footer from './Components/Footer.js';
import Routes from './Components/Routes.js';


import { useEffect, useState } from 'react';


function App() {

const [logedUser, setLogedUser] = useState('');

  useEffect(() => {

    if(localStorage.getItem("user-info")) {
      setLogedUser(JSON.parse(localStorage.getItem("user-info")));
    }

  }, [])

  console.log(logedUser.role_as);
  
  

  return (
    <div className="App">

    {/* <Header />
        <Routes>
          <Route path='/user' element={<Home />}/>
          <Route path='/add-product' element={<AddProduct />}/>
          <Route path='/product/:id/edit' element={<UpdateProduct />}/>
          <Route path='/view-products' element={<ViewAllProducts />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      <Footer /> */}

        <Header />
          <Routes />
        <Footer />

    </div>
  );
}



export default App;
