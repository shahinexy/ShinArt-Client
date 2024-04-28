import { PropTypes } from "prop-types";
import { FaAngleRight } from "react-icons/fa";

const AllCards = ({ item }) => {
  const { photo, item_name, price,  description } =
    item;
  return (
    <div>
      <div className="w-full h-full border border-secondary md:p-7 p-3 text-forth space-y-3 ">
        <img className="w-full h-56" src={photo} alt="" />
        <div className="flex flex-wrap gap-1 justify-between">
          <h1 className="text-2xl font-semibold">{item_name}</h1>
          <p className="flex items-center font-bold bg-secondary px-2">
            Price: {price}$
          </p>
        </div>
        <p>{description}</p>
        <div className="w-full">
          <button className="flex justify-center w-full gap-1 text-base items-center py-3 hover:bg-inherit text-forth font-bold bg-inherit hover:underline ">
            View Details <FaAngleRight></FaAngleRight>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

AllCards.propTypes = {
  item: PropTypes.object.isRequired,
};

export default AllCards;
