import './App.css';
import './scss/app.scss'
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Cart from './Pages/Cart'
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

    const [searchValue, setSearchValue] = useState('');

    console.log(searchValue,'input change-')

    return (
      <div className="App">
          <div className="wrapper">
              <Header searchValue={searchValue} setSearchValue={setSearchValue}></Header>
              <div className="content">

                      <Routes>
                          <Route path='/' element={<Home searchValue={searchValue}></Home>}></Route>
                          <Route path='/cart' element={<Cart></Cart>}></Route>
                          <Route path='*' element={<NotFound></NotFound>}/>
                      </Routes>

              </div>
          </div>
      </div>
    );
}

export default App;
