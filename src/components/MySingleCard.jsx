import { PropTypes } from "prop-types";
import { FaRegEdit, FaRegStar, FaRegTrashAlt } from "react-icons/fa";
const MySingleCard = ({ item }) => {
  const { photo, item_name, price, rating, description, customization, stockStatus } = item;
  return (
    <div>
      <div className="w-full h-full border border-secondary p-3 text-forth space-y-3 shadow-lg shadow-secondary">
        <img className="w-full h-56" src={photo} alt="" />
        <h1 className="text-2xl font-semibold">{item_name}</h1>
        <div className="flex justify-between">
          <p className="font-bold">Price: {price}$</p>
          <p className="flex gap-2 items-center">
            {rating} <FaRegStar></FaRegStar>
          </p>
        </div>
        <p className="pb-3">{description}</p>

        <div className="border-y-2 border-secondary py-3 flex flex-wrap gap-1 justify-between">
          <p className="bg-third px-2 border border-secondary font-semibold">Customization: {customization}</p>
          <p className="bg-third px-2 border border-secondary font-semibold"> {stockStatus}</p>
        </div>

        <div className="flex gap-3 justify-between pt-3">
          <button className="btn flex-1 flex gap-1 text-base items-center border border-secondary rounded-none bg-secondary text-forth font-bold hover:bg-inherit hover:border-secondary">
            Update <FaRegEdit></FaRegEdit>{" "}
          </button>
          <button className="btn flex-1 flex gap-1 text-base items-center border border-secondary rounded-none bg-inherit text-forth font-bold hover:bg-secondary hover:border-secondary">
            Delete <FaRegTrashAlt></FaRegTrashAlt>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

MySingleCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MySingleCard;
