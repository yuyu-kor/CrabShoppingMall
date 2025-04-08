import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = ["전체상품", "대게", "홍게", "모듬회", "기타", "공지사항"];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div>
        <div className="login-btn" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} className="login-btn-icon" />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img src="/images/crablogo.png" />
      </div>
      <div className="menu-area">
        {/* 햄버거버튼 */}
        <button className="hamburger" onClick={toggleSideBar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="menu-search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" />
        </div>
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={toggleSideBar}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul>
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
