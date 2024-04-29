import { FaFacebook, FaGithub, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary  md:py-5">
      <footer className="max-w-7xl mx-auto text-forth p-5">
        <h1 className="pb-5 border-b-2 border-secondary">
          <Link to={"/"} className="text-2xl font-bold text-third">
            Shin<span className="text-forth">Art</span>
          </Link>
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-5 text-forth">
          <div>
            <h2 className=" text-xl font-semibold border-b-2 border-secondary inline-block px-2 md:mb-7 mb-3">
              ABOUT
            </h2>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              sequi illo veniam fugit nulla nostrum.
            </p>
          </div>
          <div className="flex gap-5 justify-around">
            <div>
              <h2 className=" text-xl font-semibold border-b-2 border-secondary inline-block px-2  md:mb-7 mb-3">
                CONTACT
              </h2>
              <div className="flex font-semibold flex-col gap-3">
                <a className="link link-hover flex items-center gap-2"><FaPhone className="text-xl"></FaPhone> + 01609729900</a>
                <a className="link link-hover flex items-center gap-2"><MdEmail className="text-2xl"></MdEmail> email@gmail.com</a>
              </div>
            </div>
            <div>
              <h2 className=" text-xl font-semibold border-b-2 border-secondary inline-block px-2  md:mb-7 mb-3">
                SOCIAL
              </h2>
              <div className="flex text-3xl gap-3 text-forth">
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
                <FaGithub></FaGithub>
                <FaInstagram></FaInstagram>
              </div>
            </div>
          </div>
          <div>
            <h2 className=" text-xl font-semibold border-b-2 border-secondary inline-block px-2 md:mb-7 mb-3">
              NEWSLETTER
            </h2>
            <p className="font-semibold">Enter your email</p>
            <div className=" flex mt-3">
              <input
                type="text"
                placeholder="email@gmail.com"
                className="rounded-none px-2 w-full bg-secondary text-forth font-semibold"
              />
              <button className="btn md:px-4 px-2 text-lg font-semibold text-forth bg-third border-secondary hover:bg-primary rounded-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="text-center mt-5 pt-2 border-t-2 border-secondary">Copyright © 2024 - All right reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
