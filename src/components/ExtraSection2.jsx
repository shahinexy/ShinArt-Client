import img1 from "../assets/images/13248411_5147268.jpg";
import { FaLocationArrow } from "react-icons/fa";
const ExtraSection2 = () => {
  return (
    <div>
      <div className="flex text-forth md:my-32 my-8">
        <div className="flex-1 p-5 md:pl-20 flex  lg:justify-start justify-center items-center  bg-third lg:rounded-tr-full">
          <div className="md:w-3/4 space-y-5">
            <h1 className="md:text-4xl text-3xl font-bold">Contect with us</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              at, aperiam culpa corporis architecto ut?
            </p>
            <div className="flex gap-5">
              <input
                className="p-2 border-l-4 border-primary w-full"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="p-2 border-l-4 border-primary w-full"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <textarea
              className="p-2 border-l-4 border-primary w-full"
              rows="2"
              placeholder="Description"
            ></textarea>
            <button className="btn w-full flex gap-1 text-base items-center border border-secondary rounded-none hover:bg-secondary text-forth font-bold bg-inherit hover:border-secondary">
              Send <FaLocationArrow />
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img className="w-3/4" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection2;
