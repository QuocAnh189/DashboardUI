//image
import logo from "../../img/logo.jpeg";

//icons
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { CgMicrosoft, CgLogOut } from "react-icons/cg";
import { MdFactCheck, MdErrorOutline } from "react-icons/md";
import { FiUser, FiSettings } from "react-icons/fi";
import { IoAnalytics } from "react-icons/io5";

const LeftSide = () => {
  return (
    <aside>
      <div class="top">
        <img src={logo}></img>
        <div class="tele">
          <h2 class="text-muted">
            TEL<span class="danger">EXERCISE</span>
          </h2>
        </div>
      </div>
      <div className="sidebar">
        <a href="#">
          <span class="material-symbols-outlined">
            <CgMicrosoft />
          </span>
          <h3>Dashboard</h3>
        </a>
        <a href="#" className="active">
          <span class="material-symbols-outlined">
            <FiUser />
          </span>
          <h3>Customers</h3>
        </a>
        <a href="#">
          <span className="material-symbols-outlined">
            <AiOutlineFileProtect />
          </span>
          <h3>Orders</h3>
        </a>
        <a href="#">
          <span className="material-symbols-outlined">
            <IoAnalytics />
          </span>
          <h3>Analytics</h3>
        </a>
        <a href="#">
          <span className="material-symbols-outlined">
            <BiMessageSquareDetail />
          </span>
          <h3>Messages</h3>
          <span className="message-count">26</span>
        </a>
        <a href="#">
          <span className="material-symbols-outlined">
            <MdFactCheck />
          </span>
          <h3>Products</h3>
        </a>
        <a href="#">
          <span className="material-symbols-outlined">
            <MdErrorOutline />
          </span>
          <h3>Reports</h3>
        </a>
        <a href="#">
          <span className="material-symbols-outlined">
            <FiSettings />
          </span>
          <h3>Settings</h3>
        </a>
        <a href="#">
          <span className="material-symbols-outlined">
            <IoIosAdd />
          </span>
          <h3>Add Product</h3>
        </a>
        <a href="#">
          <span className="material-symbols-outlined">
            <CgLogOut />
          </span>
          <h3>Logout</h3>
        </a>
      </div>
    </aside>
  );
};

export default LeftSide;
