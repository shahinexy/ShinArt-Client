import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import MySingleCard from "../components/MySingleCard";
import { Helmet } from "react-helmet";

const MyItems = () => {
  const { user } = useContext(authContext);
  const [myItems, setMyItems] = useState([]);
  const [displyItem, setDisplayItem] = useState([]);

  // console.log(myItems);
  useEffect(() => {
    fetch(
      `https://ph-assignment-10-server-backend.vercel.app/art&craft/uid/${user?.uid}`
    )
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
      <Helmet>
        <title>My Art & Craft List</title>
      </Helmet>
      <div className="md:w-3/4 border-l-4 border-primary space-y-3 md:my-12 my-5 px-3 text-forth">
        <h1 className="md:text-4xl text-3xl font-semibold">
          Your Personal Gallery
        </h1>
        <p>
          Welcome to your personal gallery to display and share your unique art
          and craft creations with the world. Join our community of makers and
          enthusiasts, celebrating creativity in all its forms.
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
            displyItem={displyItem}
            setDisplayItem={setDisplayItem}
          ></MySingleCard>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
