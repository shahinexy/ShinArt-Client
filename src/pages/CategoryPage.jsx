import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SelectedCategoryCard from "../components/SelectedCategoryCard";
import { Helmet } from "react-helmet";

const CategoryPage = () => {
  const loadedData = useLoaderData();
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("https://ph-assignment-10-server-backend.vercel.app/art&craft")
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.filter(
          (data) => data.subcategory_Name == loadedData.subcategory_Name
        );
        setCategorys(remaining);
      });
  }, [loadedData]);

  return (
    <div className="max-w-7xl mx-auto px-5 md:my-20 my-10">
      <Helmet>
        <title>Categories</title>
      </Helmet>
      <h2 className="md:text-4xl text-3xl text-forth font-bold mb-10 border-l-4 border-primary pl-3">
        {loadedData.subcategory_Name}
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {categorys.map((data) => (
          <SelectedCategoryCard
            key={data._id}
            item={data}
          ></SelectedCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
