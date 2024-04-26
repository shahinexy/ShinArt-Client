import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary md:py-5">
      <footer className="max-w-7xl mx-auto p-5">
        <h1 className="pb-5 border-b-2 border-secondary">
          <Link to={"/"} className="text-2xl font-bold text-white">
            Shin<span className="text-third">Art</span>
          </Link>
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-5 text-white">
          <div>
            <h2 className="text-third text-xl font-semibold border-b-2 border-secondary inline-block px-2 mb-3">
              About
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              sequi illo veniam fugit nulla nostrum.
            </p>
          </div>
          <div className="md:text-center">
            <h2 className="text-third text-xl font-semibold border-b-2 border-secondary inline-block px-2 mb-3">
              Contact
            </h2>
            <div className="flex text-3xl justify-center gap-5 text-white">
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
                <FaGithub></FaGithub>
                <FaInstagram></FaInstagram>
            </div>
          </div>
          <div>
            <h2 className="text-third text-xl font-semibold border-b-2 border-secondary inline-block px-2 mb-3">
              Privecy
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
