import { FaAngleRight, FaRegStar } from "react-icons/fa";
// import img from "../assets/images/2149064430.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCard = ({ item, idx }) => {
  const {
    _id,
    photo,
    item_name,
    price,
    rating,
    subcategory_Name,
    description,
  } = item;
  return (
    <div>
      <div
        data-aos={idx % 2 === 0 ? "fade-down-right" : "fade-down-left"}
        data-aos-duration="1000"
        className="w-full h-full border border-secondary p-3 text-forth space-y-3 shadow-lg shadow-secondary"
      >
        <img className="w-full h-56" src={photo} alt="" />
        <h1 className="text-2xl font-semibold">{item_name}</h1>
        <div className="flex flex-wrap gap-1 justify-between">
          <p className="font-bold">Price: {price}$</p>
          <p className="bg-third px-2">{subcategory_Name}</p>
        </div>
        <p>{description}</p>
        <div className="flex justify-between">
          <Link to={`/viewDetails/${_id}`}>
            <button className="btn flex gap-1 text-base items-center border border-secondary rounded-none hover:bg-secondary text-forth font-bold bg-inherit hover:border-secondary">
              Details <FaAngleRight></FaAngleRight>{" "}
            </button>
          </Link>
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
  idx: PropTypes.number.isRequired
};

export default SingleCard;
