import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const CategoryCard = ({ item }) => {

  const { photo, description, subcategory_Name } = item;
  return (
    <div>
      <Link to={`/category/${subcategory_Name}`} className="cursor-pointer hover:underline ">
        <div className="w-full h-full border border-secondary text-forth ">
          <div className="hover:scale-105 h-full md:p-7 p-3 duration-300 space-y-3 ">
            <h2 className="text-2xl font-bold pb-2">{subcategory_Name}</h2>
            <img className="w-full h-56" src={photo} alt="" />
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

CategoryCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CategoryCard;
