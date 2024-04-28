import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import MySingleCard from "../components/MySingleCard";

const MyItems = () => {
  const { user } = useContext(authContext);
  console.log(user);
  const [myItems, setMyItems] = useState([]);
  // console.log(myItems);
  useEffect(() => {
    fetch(`http://localhost:5000/art&craft/uid/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyItems(data);
      });
  }, [user]);

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

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 md:my-12 my-5">
        {
            myItems.map(item => <MySingleCard key={item._id} item={item}></MySingleCard>)
        }
      </div>
    </div>
  );
};

export default MyItems;
