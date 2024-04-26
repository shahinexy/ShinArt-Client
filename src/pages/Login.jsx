import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const {sin} = useContext(authContext)
    console.log(sin);
  return (
    <div>
      <div className="xl:w-1/3 md:w-2/3 text-forth p-8 bg-secondary mx-auto md:my-20 my-6">
        <h1 className="text-3xl font-bold text-center mb-8">Login Now</h1>

        <form className="space-y-4">
          <div>
            <p className="font-semibold mb-1">Email</p>
            <input
              className="w-full bg-third p-2 border-l-4 border-forth"
              type="email"
              placeholder="email"
            />
          </div>
          <div>
            <p className="font-semibold mb-1">Password</p>
            <input
              className="w-full bg-third p-2 border-l-4 border-forth"
              type="text"
              placeholder="password"
            />
          </div>
          <div>
            <button className="btn w-full text-xl text-forth font-semibold hover:bg-primary rounded-none border-2 border-forth hover:border-primary bg-inherit mt-6">
              Login
            </button>
          </div>
          <p>
            Don't have an account?{" "}
            <Link to={"/register"} className="font-bold underline">
              Register
            </Link>
          </p>
        </form>
        <div className="flex gap-3">
          <button className="btn flex-1 text-xl text-forth font-semibold hover:bg-primary rounded-none border-2 border-primary hover:border-forth bg-inherit mt-6">
            <FaGoogle></FaGoogle> Login
          </button>
          <button className="btn flex-1 text-xl text-forth font-semibold hover:bg-primary rounded-none border-2 border-primary hover:border-forth bg-inherit mt-6">
            <FaGithub></FaGithub> Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
