import CategoryCard from "./CategoryCard";

import { useEffect, useState } from "react";

const CategorySection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://ph-assignment-10-server-backend.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <div className="md:w-3/4 border-l-4 border-primary space-y-3 md:my-20 my-5 px-3 text-forth">
        <h1
          data-aos="zoom-out-left"
          className="md:text-4xl text-3xl font-semibold"
        >
          Natural Element Categories
        </h1>
        <p data-aos="zoom-out-left" data-aos-delay="200">
          Explore our Natural Elements collection, featuring eco-friendly
          treasures crafted from jute and wood, perfect for adding rustic charm
          and sustainable style to your home and wardrobe.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {items.map((item, idx) => (
          <CategoryCard key={item._id} item={item} idx={idx}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
