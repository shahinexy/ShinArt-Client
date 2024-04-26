import { FaAngleRight, FaRegStar } from "react-icons/fa";
// import img from "../assets/images/2149064430.jpg";
import PropTypes from "prop-types";

const SingleCard = ({ item }) => {
  console.log(item);
  const { photo, item_name, price, rating, subcategory_Name, description } = item;
  return (
    <div>
      <div className="w-full h-full border border-secondary p-3 text-forth space-y-3 shadow-lg shadow-secondary">
        <img className="w-full h-56" src={photo} alt="" />
        <h1 className="text-2xl font-semibold">{item_name}</h1>
        <div className="flex justify-between">
          <p className="font-bold">Price: {price}$</p>
          <p className="bg-secondary px-2">{subcategory_Name}</p>
        </div>
        <p>{description}</p>
        <div className="flex justify-between">
          <button className="btn flex gap-1 text-base items-center border border-secondary rounded-none bg-secondary text-forth font-bold hover:bg-inherit hover:border-secondary">
            Details <FaAngleRight></FaAngleRight>{" "}
          </button>
          <p className="flex gap-2 items-center">
            {rating} <FaRegStar></FaRegStar>
          </p>
        </div>
      </div>
    </div>
  );
};

SingleCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SingleCard;
