import CraftItems from "../components/CraftItems";
import Slider from "../components/Slider";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <div>
      <ThemeToggle></ThemeToggle>
      <Slider></Slider>
      <div className="max-w-7xl mx-auto px-5">
        <CraftItems></CraftItems>
      </div>
    </div>
  );
};

export default Home;
