const AddItem = () => {
  return (
    <div className="text-forth">
      <div className="md:w-2/4 mx-auto text-center space-y-3 md:my-8 my-5 px-3">
        <h1 className="md:text-4xl text-3xl font-semibold">
          Add Your Carft And Art
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sed
          libero quod nostrum nisi animi. Sit quo soluta esse reiciendis
          mollitia velit tempora ullam delectus, quisquam quod sunt ipsam
          tempore.
        </p>
      </div>

      <div className="bg-secondary p-8 md:mb-8 mb-5 max-w-5xl mx-auto">
        <form className="space-y-5">
            <div className="flex justify-center mb-10">
            <h1 className=" text-center text-2xl font-bold border-b-2 border-third pb-3 px-2 inline-block ">Fill your Art & Carft details</h1>
            </div>
            <div className="flex md:flex-row flex-col md:gap-7 gap-5">
                <div className="w-full">
                    <p className="font-semibold mb-1">Photo URL</p>
                    <input className="w-full bg-third p-2" type="text" placeholder="url" />
                </div>
                <div className="w-full">
                    <p className="font-semibold mb-1">Name</p>
                    <input className="w-full bg-third p-2" type="text" placeholder="name" />
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-7 gap-5">
                <div className="w-full">
                    <p className="font-semibold mb-1">Subcategory Name</p>
                    <input className="w-full bg-third p-2" type="text" placeholder="subcategory" />
                </div>
                <div className="w-full">
                    <p className="font-semibold mb-1">Price</p>
                    <input className="w-full bg-third p-2" type="text" placeholder="price" />
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-7 gap-5">
                <div className="w-full">
                    <p className="font-semibold mb-1">Rating</p>
                    <input className="w-full bg-third p-2" type="text" placeholder="rating" />
                </div>
                <div className="w-full">
                    <p className="font-semibold mb-1">Customization</p>
                    <input className="w-full bg-third p-2" type="text" placeholder="customization" />
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-7 gap-5">
                <div className="w-full">
                    <p className="font-semibold mb-1">Processing Time</p>
                    <input className="w-full bg-third p-2" type="text" placeholder="processing time" />
                </div>
                <div className="w-full">
                    <p className="font-semibold mb-1">Stock Status</p>
                    <input className="w-full bg-third p-2" type="text" placeholder="stock status" />
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:gap-7 gap-5">
                <div className="w-full">
                    <p className="font-semibold mb-1">User Email</p>
                    <input className="w-full bg-third p-2" type="text" placeholder="email" />
                </div>
                <div className="w-full">
                    <p className="font-semibold mb-1">User Name</p>
                    <input className="w-full bg-third p-2" type="text" placeholder="name" />
                </div>
            </div>
            <div>
            <p className="font-semibold mb-1">Description</p>
                <textarea className="w-full bg-third p-2"  rows="3" placeholder="description"></textarea>
            </div>
            <div className="py-5">
            <button className="btn w-full text-xl text-forth font-semibold hover:bg-primary rounded-none border-2 border-primary hover:border-primary bg-inherit">Add Now</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
