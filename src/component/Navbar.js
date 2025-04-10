import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ["전체상품", "대게", "홍게", "모듬회", "기타", "공지사항"];
  // 사이드바 관리
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // 로그인 상태관리
  const [isLogin, setIsLogin] = useState(false);

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  
  const handleLogout = () => {
    setAuthenticate(false);
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서 (input안의 값 읽어올 수 있음)
      let keyword = event.target.value;
      console.log("keyword", keyword);
      // url을 바꿔줌
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div>
        <div
          className="login-btn"
          onClick={authenticate ? handleLogout : handleLogin}
        >
          <FontAwesomeIcon icon={faUser} className="login-btn-icon" />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          src="/images/crablogo.png"
          alt="대게왕국 로고 이미지"
          onClick={() => {
            navigate("/");
            // 로고 클릭 시 페이지 최상단으로 이동
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
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
          <input type="text" onKeyDown={(event) => search(event)} />
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
