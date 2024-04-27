import { useLoaderData } from "react-router-dom";
import AllCards from "../components/AllCards";

const AllItems = () => {
    const datas = useLoaderData()
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="md:w-3/4 border-l-4 border-primary space-y-3 md:my-12 my-5 px-3 text-forth">
        <h1 className="md:text-4xl text-3xl font-semibold">
          Our All Art and Craft Colltections
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          distinctio iusto neque dolorem molestiae quos ullam soluta velit
          incidunt praesentium quo expedita impedit, veniam, reiciendis
          cupiditate sequi id hic ipsa?
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:my-12 my-5">
        {datas.map((item) => (
          <AllCards key={item._id} item={item}></AllCards>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
