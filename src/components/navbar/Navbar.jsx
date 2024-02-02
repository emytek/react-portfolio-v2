import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Emmy Tech
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/emmy-okalla/">
          <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/emytek/">
          <FaGithub size={24}  />
          </a>
          <a href="https://web.facebook.com/emmy.okalla.7">
          <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
