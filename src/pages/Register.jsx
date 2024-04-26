import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
                  <div className="xl:w-1/3 md:w-2/3 text-forth p-8 bg-secondary mx-auto md:my-20 my-6">
        <h1 className="text-3xl font-bold text-center mb-8">Register Now</h1>

        <form className="space-y-4">
          <div>
            <p className="font-semibold mb-1">Name</p>
            <input
              className="w-full bg-third p-2 border-l-4 border-forth"
              type="text"
              placeholder="name"
            />
          </div>
          <div>
            <p className="font-semibold mb-1">Photo URL</p>
            <input
              className="w-full bg-third p-2 border-l-4 border-forth"
              type="text"
              placeholder="url"
            />
          </div>
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
              Register
            </button>
            </div>
            <p>Already have an account? <Link to={'/login'} className="font-bold underline">Login</Link></p>
        </form>
      </div>
        </div>
    );
};

export default Register;