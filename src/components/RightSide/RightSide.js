//library
import { useState } from "react";

//image
import logo from "../../img/logo.jpeg";
import avatar from "../../img/avatar.jpg";

//icons
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

const RightSide = () => {
  const HandleThemeToggle = () => {
    document.body.classList.toggle("dark-theme-variables");
    SetCheckTG(!checkTG);
  };
  const [checkTG, SetCheckTG] = useState(false);

  return (
    <div className="right">
      <div class="top">
        <button id="menu-btn">
          <span class="material-symbols-outlined">menu</span>
        </button>
        <div class="theme-toggler" onClick={HandleThemeToggle}>
          <span
            id={checkTG === true ? "aaa" : "bbb"}
            className="material-symbols-outlined"
          >
            <CiLight />
          </span>
          <span
            id={checkTG === false ? "aaa" : "bbb"}
            className="material-symbols-outlined"
          >
            <MdDarkMode />
          </span>
        </div>
        <div class="profile">
          <div class="info">
            <p>
              Hey, <b>AnhQuoc</b>
            </p>
            <small class="text-muted">Admin</small>
          </div>
          <div class="profile-photo">
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>

      <div class="recent-updates">
        <h2>Recent Updates</h2>
        <div class="updates">
          <div class="update">
            <div class="profile-photo">
              <img src={logo} alt="" />
            </div>
            <div class="message">
              <p>
                <b>Mike Tyson</b>received his oder of Night lion tech PGS drone.
              </p>
              <small class="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div class="update">
            <div class="profile-photo">
              <img src={logo} alt="" />
            </div>
            <div class="message">
              <p>
                <b>Mike Tyson</b>received his oder of Night lion tech PGS drone.
              </p>
              <small class="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div class="update">
            <div class="profile-photo">
              <img src={logo} alt="" />
            </div>
            <div class="message">
              <p>
                <b>Mike Tyson</b>received his oder of Night lion tech PGS drone.
              </p>
              <small class="text-muted">2 Minutes Ago</small>
            </div>
          </div>
        </div>
      </div>

      <div class="sales-analytics">
        <h2>Sales Analytics</h2>
        <div class="item online">
          <div class="icon">
            <AiOutlineShoppingCart />
          </div>
          <div class="right">
            <div class="info">
              <h3>ONLINE</h3>
              <small class="text-muted">Last 24 Hours</small>
            </div>
            <h5 class="danger">+39%</h5>
            <h3>3849</h3>
          </div>
        </div>
        <div class="item offline">
          <div class="icon">
            <AiOutlineShoppingCart />
          </div>
          <div class="right">
            <div class="info">
              <h3>OFFLINE ORDERS</h3>
              <small class="text-muted">Last 24 Hours</small>
            </div>
            <h5 class="success">-17%</h5>
            <h3>1100</h3>
          </div>
        </div>
        <div class="item online">
          <div class="icon">
            <AiOutlineUser />
          </div>
          <div class="right">
            <div class="info">
              <h3>NEW CUSTOMERS</h3>
              <small class="text-muted">Last 24 Hours</small>
            </div>
            <h5 class="success">+25%</h5>
            <h3>849</h3>
          </div>
        </div>
        <div class="item add-product">
          <div>
            <h3>Add Product</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
