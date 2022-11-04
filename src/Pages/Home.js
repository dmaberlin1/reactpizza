import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {useEffect, useState} from "react";
import uuid from "react-uuid";
import imgNapoletana from "../img/PIZZA-NAPOLETANA.jpg";
import imgCalzone from "../img/calzone-pizza.jpg";
import imgRomana from "../img/pizza-romana.jpg";
import imgTegamino from "../img/Pizza-tegamino.jpg";
import imgAlMetro from "../img/Pizza-al-metro.jpg";
import imgSiciliana from "../img/sizilian.jpg";
import imgGurme from "../img/pizzagurme.jpg";

function id() {
    return uuid()
}



const pizzaData = [
    {id: id(),types:[0,1],sizes:[26,40],category:0,rating:6, title: 'Неаполитанская пицца (Pizza Napoletana', price: 6, img: imgNapoletana},
    {id: id(),types:[0],sizes:[30,40],category:1,rating:6, title: 'Кальцоне (Calzone)', price: 6, img: imgCalzone},
    {id: id(),types:[0,1],sizes:[26,30,40],category:2,rating:6, title: 'Римская пицца (Pizza Romana)', price: 8, img: imgRomana},
    {id: id(),types:[0,1],sizes:[26,40],category:3,rating:6, title: '   Пицца в сковороде (Pizza al tegamino)', price: 7, img: imgTegamino},
    {id: id(),types:[0,1],sizes:[100],category:4,rating:6, title: 'Метровая пицца (Pizza al metro или Pizza alla Palla)', price: 11, img: imgAlMetro},
    {id: id(),types:[0,1],sizes:[26,30,40],category:5,rating:6, title: 'Сицилийская пицца (Pizza Siciliana)', price: 8, img: imgSiciliana},
    {id: id(),types:[1],sizes:[26,30,40],category:6,rating:6, title: 'Пицца-гурме’(Pizza Gourmet) ', price: 7, img: imgGurme}


]






const Home = ({searchValue}) => {

    const[items,setItems]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    useEffect(() => {
        fetch("https://635fe1563e8f65f283bddfd4.mockapi.io/items").then(res=>{
            return res.json()
        }).then(arr=>{
            setItems(arr)
            isLoading(false)

        })
        window.scrollTo(0,0)
    }, []);


    return(
    <>
        <div className='container'>
        <div className="content__top">
            <Categories></Categories>
            <Sort></Sort>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {/*isLoading? <PizzaSceleton></PizzaSceleton>*/}
            <PizzaBlock pizzaData={pizzaData}></PizzaBlock>

        </div>
        </div>
    </>
  )
}

export default Home