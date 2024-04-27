import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUser } = useContext(authContext);
  const [showHide, setShowHide] = useState(true);
  const [passType, setPassType] = useState(true);

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(data.pass)){
      toast.error("Password requires 1 lowercase, 1 uppercase, and min 6 characters.")
    }

    createUser(data.email, data.pass)
      .then((res) => {
        if(res){
          toast.success("Register Successfull")
          updateUser(data.name, data.photo)
          .then()
          .catch(error => console.log(error))
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //handle show hide icon
  const handleShowHide = () => {
    setShowHide(!showHide);
    setPassType(!passType);
  };

  return (
    <div>
      <div className="xl:w-1/3 md:w-2/3 text-forth p-8 bg-secondary mx-auto md:my-20 my-6">
        <h1 className="text-3xl font-bold text-center mb-8">Register Now</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <p className="font-semibold mb-1">Name</p>
            <input
              {...register("name")}
              className="w-full bg-third p-2 border-l-4 border-forth"
              type="text"
              placeholder="name"
            />
          </div>
          <div>
            <p className="font-semibold mb-1">Photo URL</p>
            <input
              {...register("photo")}
              className="w-full bg-third p-2 border-l-4 border-forth"
              type="text"
              placeholder="url"
            />
          </div>
          <div>
            <p className="font-semibold mb-1">Email</p>
            <input
              {...register("email")}
              className="w-full bg-third p-2 border-l-4 border-forth"
              type="email"
              placeholder="email"
              required
            />
          </div>
          <div className="relative">
            <p className="font-semibold mb-1">Password</p>
            <input
              {...register("pass")}
              className="w-full bg-third p-2 border-l-4 border-forth"
              type={passType ? "password" : "text"}
              placeholder="password"
              required
            />
            {/* pass show and hide  */}
            <span
              onClick={handleShowHide}
              className="absolute bottom-0 right-0 text-primary cursor-pointer p-3"
            >
              {showHide ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <div>
            <button className="btn w-full text-xl text-forth font-semibold hover:bg-primary rounded-none border-2 border-forth hover:border-primary bg-inherit mt-6">
              Register
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="font-bold underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
