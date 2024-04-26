import { useLoaderData } from "react-router-dom";
import CraftItems from "../components/CraftItems";
import Slider from "../components/Slider";

const Home = () => {
  const allItems = useLoaderData()
  return (
    <div>
      <Slider></Slider>
      <div className="max-w-7xl mx-auto px-5">
        <CraftItems allItems={allItems}></CraftItems>
      </div>
    </div>
  );
};

export default Home;
