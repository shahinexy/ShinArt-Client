import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import MySingleCard from "../components/MySingleCard";

const MyItems = () => {
  const { user } = useContext(authContext);
  const [myItems, setMyItems] = useState([]);
  const [displyItem, setDisplayItem] = useState([]);

  // console.log(myItems);
  useEffect(() => {
    fetch(`http://localhost:5000/art&craft/uid/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyItems(data);
        setDisplayItem(data);
      });
  }, [user]);

  const handleFilter = (value) => {
    if (value === "Yes") {
      const result = myItems.filter((item) => item.customization == "Yes");
      setDisplayItem(result);
    } else if (value === "No") {
      const result = myItems.filter((item) => item.customization == "No");
      setDisplayItem(result);
    } else {
      setDisplayItem(myItems);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="md:w-3/4 border-l-4 border-primary space-y-3 md:my-12 my-5 px-3 text-forth">
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

      {/* dropdwon filter  */}
      <div className="flex justify-end">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 rounded-none bg-secondary text-forth font-semibold text-base"
          >
            Customization
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-full bg-third"
          >
            <li onClick={() => handleFilter("Yes")}>
              <a>Yes</a>
            </li>
            <li onClick={() => handleFilter("No")}>
              <a>No</a>
            </li>
            <li onClick={() => handleFilter("All")}>
              <a>All</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 md:my-12 my-5">
        {displyItem.map((item) => (
          <MySingleCard
            key={item._id}
            item={item}
            myItems={myItems}
            setMyItems={setMyItems}
          ></MySingleCard>
        ))}
      </div>
    </div>
  );
};


export default MyItems;
