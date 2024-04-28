import { useLoaderData } from "react-router-dom";
import { FaAngleRight, FaStar } from "react-icons/fa";
const ViewDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    photo,
    item_name,
    price,
    rating,
    subcategory_Name,
    description,
    customization,
    stockStatus,
    processing_time,
    email,
    name,
  } = data;
  return (
    <div className="max-w-6xl mx-auto px-5 text-forth">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:my-12 my-5">
        <div className="border-2 border-secondary flex justify-center items-center md:py-16 py-10">
          <img className="w-3/4" src={photo} alt="" />
        </div>
        <div className="space-y-7 ">
          <h1 className="md:text-4xl text-3xl border-l-4 border-primary pl-3 font-bold uppercase">
            {item_name}
          </h1>
          <div className="flex justify-between border-y border-secondary py-3">
            <p className="text-lg font-bold">Price {price}$</p>
            <p className="flex gap-2 items-center">
              Rating: {rating} <FaStar></FaStar>
            </p>
          </div>

          <p>{description}</p>
          <div className="flex justify-end">
            <p className="bg-secondary px-2">{subcategory_Name}</p>
          </div>

          <div className="flex justify-between border-y border-secondary py-3">
            <p className="text-lg font-bold">Customization: {customization}</p>
            <p className="text-lg font-bold">Stock Status: {stockStatus}</p>
          </div>
          <div className="flex justify-between ">
            <p><span className="font-bold">User:</span> {name}</p>
            <p><span className="font-bold">Email:</span> {email}</p>
          </div>
            <p><span className="font-bold">Processing Time:</span> {processing_time}</p>
            <div className="pt-5">
            <button className="btn px-10 flex gap-1 text-base items-center border border-secondary rounded-none bg-secondary text-forth font-bold hover:bg-inherit hover:border-secondary uppercase">
              Add to Cart <FaAngleRight></FaAngleRight>{" "}
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
