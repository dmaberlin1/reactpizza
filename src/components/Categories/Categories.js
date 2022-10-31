import {useState} from "react";

const categoriesData = [
    {index: 0, title: 'Все'},
    {index: 1, title: 'Мясные'},
    {index: 2, title: 'Вегетаринаская'},
    {index: 3, title: 'Гриль'},
    {index: 4, title: 'Острые'},
    {index: 5, title: 'Закрытые'}
]

const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexHandler = (value) => {
        setActiveIndex(value)
    }

    const resultCategories = [categoriesData.map((category) => {
        return <li
          key={category.index}
          onClick={() => activeIndexHandler(category.index)}
                   className={activeIndex ===category.index  ? 'active' : ''}
        >
            {category.title}</li>
    })]

    return (
      <div className="categories">
          <ul>
              {resultCategories}
          </ul>
      </div>
    )
}

export default Categories
