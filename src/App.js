import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. 네비게이션바
// 2. 전체상품페이지에서는 전체 상품을 볼 수 있음
// 3. 로그인 버튼을 누르면 로그인 페이지가 나옴
// 4. 상품디테일을 눌렀으나 로그인이 안 되어 있을 경우, 로그인페이지가 먼저 나옴
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 됨
// 6. 로그아웃이 되면 상품상세페이지를 볼 수 없음, 다시 로그인 페이지가 보임
// 7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보임
// 8. 상품을 검색할 수 있음
function App() {
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인 됨, false면 락
  useEffect(() => {
    console.log("aaaa", authenticate);
  }, [authenticate]);

  return (
    <div>
      {/* 로그인 상태와 setter를 Navbar에 넘겨줌 */}
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
