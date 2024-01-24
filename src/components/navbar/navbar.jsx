import Sidebar from "../sidebar/sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Tai Quach
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="html5" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="html5" />
          </a>
          <a href="#">
            <img src="/github.jpg" alt="html5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
