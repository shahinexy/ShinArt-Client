import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const DataUpdate = () => {
  const data = useLoaderData();

  const {
    _id,
    photo,
    item_name,
    price,
    rating,
    processing_time,
    description,
    // customization,
    // stockStatus,
  } = data;

  const {
    register,
    handleSubmit,
    // reset
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch(`http://localhost:5000/art&craft/id/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.modifiedCount > 0){
            toast.success("Update Successfull")
        }
    })
  };

  return (
    <div className="max-w-5xl mx-auto text-forth">
      <div className="bg-secondary p-8  md:my-32 my-10 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex justify-center mb-10">
            <h1 className=" text-center text-2xl font-bold border-b-2 border-third pb-3 px-2 inline-block ">
              Modify your Art & Carft details
            </h1>
          </div>
          <div className="flex md:flex-row flex-col md:gap-7 gap-5">
            <div className="w-full">
              <p className="font-semibold mb-1">Photo URL</p>
              <input
                {...register("photo")}
                className="w-full bg-third p-2"
                type="text"
                placeholder="url"
                defaultValue={photo}
                required
              />
            </div>
            <div className="w-full">
              <p className="font-semibold mb-1">Item Name</p>
              <input
                {...register("item_name")}
                className="w-full bg-third p-2"
                type="text"
                placeholder="name"
                defaultValue={item_name}
                required
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:gap-7 gap-5">
            <div className="w-full">
              <p className="font-semibold mb-1">Subcategory Name</p>
              <select
                {...register("subcategory_Name")}
                className="w-full bg-third p-2"
              >
                <option value="Wooden Furniture & Sculptures">
                  Wooden Furniture & Sculptures
                </option>
                <option value="Wooden Home Decor">Wooden Home Decor</option>
                <option value="Wooden Utensils and Kitchenware">
                  Wooden Utensils and Kitchenware
                </option>
                <option value="Jute Home Decor">Jute Home Decor</option>
                <option value="Jute Kitchenware & utensils">
                  Jute Kitchenware & utensils
                </option>
                <option value="Jute and wooden jewellery">
                  Jute and wooden jewellery
                </option>
              </select>
            </div>
            <div className="w-full">
              <p className="font-semibold mb-1">Price</p>
              <input
                {...register("price")}
                className="w-full bg-third p-2"
                type="number"
                placeholder="price"
                defaultValue={price}
                required
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:gap-7 gap-5">
            <div className="w-full">
              <p className="font-semibold mb-1">Rating</p>
              <input
                {...register("rating")}
                className="w-full bg-third p-2"
                type="number"
                step={0.1}
                max={5}
                placeholder="rating (1-5)"
                defaultValue={rating}
              />
            </div>
            <div className="w-full">
              <p className="font-semibold mb-1">Processing Time</p>
              <input
                {...register("processing_time")}
                className="w-full bg-third p-2"
                type="text"
                placeholder="processing time"
                defaultValue={processing_time}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:gap-7 gap-5">
            <div className="w-full">
              <p className="font-semibold mb-1">Customization</p>
              <select
                {...register("customization")}
                className="w-full bg-third p-2"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="w-full">
              <p className="font-semibold mb-1">Stock Status</p>
              <select
                {...register("stockStatus")}
                className="w-full bg-third p-2"
              >
                <option value="In stock">In stock</option>
                <option value="Made to order">Made to order</option>
              </select>
            </div>
          </div>
          <div>
            <p className="font-semibold mb-1">Sort Description</p>
            <textarea
              {...register("description")}
              className="w-full bg-third p-2"
              rows="3"
              placeholder="description"
              defaultValue={description}
              required
            ></textarea>
          </div>
          <div className="py-5">
            <button className="btn w-full text-xl text-forth font-semibold hover:bg-primary rounded-none border-2 border-primary hover:border-primary bg-inherit">
              Update Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataUpdate;