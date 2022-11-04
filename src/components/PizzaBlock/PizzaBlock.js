import imgNapoletana from '../../img/PIZZA-NAPOLETANA.jpg'
import imgCalzone from '../../img/calzone-pizza.jpg'
import imgSiciliana from '../../img/sizilian.jpg'
import imgTegamino from '../../img/Pizza-tegamino.jpg'
import imgAlMetro from '../../img/Pizza-al-metro.jpg'
import imgRomana from '../../img/pizza-romana.jpg'
import imgGurme from '../../img/pizzagurme.jpg'
import uuid from 'react-uuid'
import {useState} from "react";

// function id() {
//     return uuid()
// }


//end in 56-40 second






const PizzaBlock = ({pizzaData}) => {
    const typeNames=['тонкое','традиционное']
    const [count, setCount] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndexSize, setActiveIndexSize] = useState(0);
    const activeIndexSizeHandler=(value)=>{
        setActiveIndexSize(value)
    }
    const activeIndexHandler = (value) => {
        setActiveIndex(value)
    }


    const result = pizzaData.map((pizza)=>{
        return (
          <div className='pizza-block-wrapper'>
          <div key={pizza.id}  className="pizza-block">
              <img
                className="pizza-block__image"
                src={pizza.img}
                alt="Pizza"
              />
              <h4 className="pizza-block__title">{pizza.title}</h4>
              <div className="pizza-block__selector">
                  <ul>
                      {
                          pizza.types.map((type,index)=>{

                            return  <li
                              key={index}
                              onClick={()=>activeIndexHandler(index)}
                              className={activeIndex===index ? 'active' : ''}
                            >{typeNames[type]}</li>

                              // return <><li>{type===0? typeNames[0]:''}</li>
                              //          <li>{type===1? typeNames[1]:''}</li>
                              // </>
                          })

                      }


                  </ul>
                  <ul>
                      {
                          pizza.sizes.map((size,index)=>{
                             return <li
                               key={index}
                             onClick={()=>activeIndexSizeHandler(index)}
                             className={activeIndexSize===index? 'active' :''}
                             >{size} см</li>
                          })
                      }
                  </ul>
              </div>
              <div className="pizza-block__bottom">
                  <div className="pizza-block__price">{pizza.price}</div>
                  <div className="button button--outline button--add">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                          />
                      </svg>
                      <span onClick={(e)=>setCount(count+1)}>Добавить</span>
                      <i>{count}</i>
                  </div>
              </div>
          </div>
          </div>
        )
    })


    return (
      <>
      {result}
      </>
    )
}
export default PizzaBlock



// <div className="pizza-block">
//   <img
// className="pizza-block__image"
// src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
// alt="Pizza"
//   />
//   <h4 className="pizza-block__title">Чизбургер-пицца</h4>
// <div className="pizza-block__selector">
//     <ul>
//         <li className="active">тонкое</li>
//         <li>традиционное</li>
//     </ul>
//     <ul>
//         <li className="active">26 см.
//         </li>
//         <li>30 см.</li>
//         <li>40 см.</li>
//     </ul>
// </div>
// <div className="pizza-block__bottom">
//     <div className="pizza-block__price">от 395 ₽</div>
//     <div className="button button--outline button--add">
//         <svg
//           width="12"
//           height="12"
//           viewBox="0 0 12 12"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//             <path
//               d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
//               fill="white"
//             />
//         </svg>
//         <span>Добавить</span>
//         <i>2</i>
//     </div>
// </div>
// </div>