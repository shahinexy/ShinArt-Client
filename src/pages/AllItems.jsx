import { FaAngleRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const AllItems = () => {
  const datas = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="md:w-3/4 border-l-4 border-primary space-y-3 md:my-12 my-5 px-3 text-forth">
        <h1 className="md:text-4xl text-3xl font-semibold">
          Our All Art and Craft Colltections
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          distinctio iusto neque dolorem molestiae quos ullam soluta velit
          incidunt praesentium quo expedita impedit, veniam, reiciendis
          cupiditate sequi id hic ipsa?
        </p>
      </div>

      <table className="table mb-12 table-zebra text-forth font-semibold">
        <thead>
          <tr className="text-lg text-forth uppercase">
            <th></th>
            <th>Item Name</th>
            <th>Sub Category</th>
            <th>Stock Status</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item, idx) => (
            <tr key={item._id} className="hover ">
              <th>{idx + 1}</th>
              <td className="font-bold text-base">{item.item_name}</td>
              <td>{item.subcategory_Name}</td>
              <td>{item.stockStatus}</td>
              <td>{item.price}$</td>
              <td>
                <Link to={`/viewDetails/${item._id}`}>
                  {" "}
                  <button className="btn flex gap-1 items-center border border-secondary rounded-none hover:bg-secondary text-forth font-bold bg-inherit hover:border-secondary">
                    View Details <FaAngleRight></FaAngleRight>{" "}
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllItems;
