import CategoryCard from "./CategoryCard";

import { useEffect, useState } from "react";

const CategorySection = () => {
    const [items, setItems] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
  return (
    <div>
      <div className="md:w-3/4 border-l-4 border-primary space-y-3 md:my-20 my-5 px-3 text-forth">
        <h1 className="md:text-4xl text-3xl font-semibold">
          Categories Section
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          distinctio iusto neque dolorem molestiae quos ullam soluta velit
          incidunt praesentium quo expedita impedit, veniam, reiciendis
          cupiditate sequi id hic ipsa?
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {
            items.map(item => <CategoryCard key={item._id} item={item}></CategoryCard>)
        }
      </div>
    </div>
  );
};

export default CategorySection;
