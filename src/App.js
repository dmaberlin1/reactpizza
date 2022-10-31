import './App.css';
import './scss/app.scss'
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import uuid from "react-uuid";
import {useEffect, useState} from "react";
import PizzaSceleton from "./components/PizzaBlock/Sceleton";
import NotFound from "./Pages/NotFound";
import {Route, Routes} from "react-router-dom";


//
// //end 56:47  #7


function App() {




    return (
      <div className="App">
          <div className="wrapper">
              <Header></Header>
              <div className="content">
                  <div className="container">
                      <Routes>
                          <Route path='/' element={<Home></Home>}></Route>
                          <Route path='/notfound' element={<NotFound></NotFound>}/>
                      </Routes>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default App;
