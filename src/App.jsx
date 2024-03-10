// import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Login from './components/pages/registration/Login';
import SignUp from './components/pages/registration/SignUp';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRouter';
import AddProduct from './components/pages/addProduct/AddProduct';
import UpdateProduct from './components/pages/updateProduct/UpdateProduct';
import MyState from './context/data/myState';
import ProductTable from './components/productTable/ProductTable';

const App = () => {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path='/' element={ 
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
        } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/signup' element={ <SignUp/> } />
        <Route path='/addProduct' element={<AddProduct/>} />
        <Route path='/updateProduct' element={<UpdateProduct/>} />
        <Route path='/productTable' element={ <ProductTable/> } />
      </Routes>
    </Router>
    </MyState>
  )
}

export default App