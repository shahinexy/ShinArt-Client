import { PropTypes } from "prop-types";
import { FaRegEdit, FaRegStar, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySingleCard = ({ item, myItems, setMyItems }) => {
  const {
    _id,
    photo,
    item_name,
    price,
    rating,
    description,
    customization,
    stockStatus,
  } = item;

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/art&craft/id/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              const remainig = myItems.filter((item) => item._id !== id);
              setMyItems(remainig);
            }
          });
      }
    });
  };

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
        <p className="pb-2">{description}</p>

        <div className="border-y-2 border-secondary py-3 flex flex-wrap gap-1 justify-between">
          <p className="bg-third px-2 border border-secondary font-semibold">
            Customization: {customization}
          </p>
          <p className="bg-third px-2 border border-secondary font-semibold">
            {" "}
            {stockStatus}
          </p>
        </div>

        <div className="flex gap-3 justify-between pt-2">
          <div className="flex-1">
          <Link to={`/update/${_id}`}>
            <button className="btn flex-1 w-full gap-1 text-base items-center border border-secondary rounded-none bg-secondary text-forth font-bold hover:bg-inherit hover:border-secondary">
              Update <FaRegEdit></FaRegEdit>{" "}
            </button>
          </Link>
          </div>
          <div className="flex-1">
          <button
            onClick={() => handleDelete(_id)}
            className="btn flex-1 w-full gap-1 text-base items-center border border-secondary rounded-none bg-inherit text-forth font-bold hover:bg-secondary hover:border-secondary"
          >
            Delete <FaRegTrashAlt></FaRegTrashAlt>{" "}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MySingleCard.propTypes = {
  item: PropTypes.object.isRequired,
  myItems: PropTypes.array.isRequired,
  setMyItems: PropTypes.array.isRequired,
};

export default MySingleCard;
