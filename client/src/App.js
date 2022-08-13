import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Register from './Components/Register';
import AllRecipes from './Components/AllRecipes';
import EditRecipe from './Components/EditRecipe';
import AddRecipe from './Components/AddRecipe';

function App() {

  const [user, setLoginUser] = useState({})

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login setLoginUser={setLoginUser}/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/home' element={
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }/>
          <Route exact path='/allRecipe' element={<AllRecipes/>}/>

          <Route exact path='/edit/:id' element={<EditRecipe/>}/>

          <Route exact path='/add' element={<AddRecipe/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
