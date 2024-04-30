import { PropTypes } from "prop-types";
import { FaAngleRight, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SelectedCategoryCard = ({ item }) => {
  const {
    _id,
    photo,
    item_name,
    price,
    rating,
    subcategory_Name,
    description,
    processing_time,
  } = item;
  return (
    <div>
      <div className="w-full h-full bg-third border border-secondary p-3 text-forth space-y-3 shadow-lg shadow-secondary">
        <img className="w-full h-56" src={photo} alt="" />
        <h1 className="text-2xl font-semibold">{item_name}</h1>
        <div className="flex flex-wrap gap-1 justify-between">
          <p className="font-bold">Price: {price}$</p>
          <p className="bg-secondary px-2">{subcategory_Name}</p>
        </div>
        <p>{description.slice(0, 160)}...</p>
        <div className="flex justify-between gap-1 flex-wrap border-y border-secondary py-3">
          <p>Processing Time: {processing_time}</p>
          <p className="flex gap-2 items-center">
            {rating} <FaRegStar></FaRegStar>
          </p>
        </div>
        <div className="w-full pt-3">
          <Link to={`/viewDetails/${_id}`}>
            <button className="btn w-full flex gap-1 text-base items-center border border-secondary rounded-none bg-secondary text-forth font-bold hover:bg-inherit hover:border-secondary">
              Details <FaAngleRight></FaAngleRight>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SelectedCategoryCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SelectedCategoryCard;
