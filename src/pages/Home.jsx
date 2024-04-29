import { useLoaderData } from "react-router-dom";
import CraftItems from "../components/CraftItems";
import Slider from "../components/Slider";
import ExtraRoute1 from "../components/ExtraRoute1";
import ExtraSection2 from "../components/ExtraSection2";
import CategorySection from "../components/CategorySection";
// import Testing from "../components/Testing";

const Home = () => {
  const allItems = useLoaderData()
  return (
    <div>
      <Slider></Slider>

      {/* <Testing></Testing> */}

      <div className="max-w-7xl mx-auto px-5">
        <CraftItems allItems={allItems}></CraftItems>
      </div>

      <ExtraRoute1></ExtraRoute1>

      <div className="max-w-7xl mx-auto px-5">
      <CategorySection></CategorySection>
      </div>

      <ExtraSection2></ExtraSection2>
    </div>
  );
};

export default Home;
