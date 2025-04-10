import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail=()=>{
    navigate(`/product/${item.id}`)
  }
  return (
    <div className="product-card" onClick={showDetail}>
      <img src={item?.img} alt="상품 이미지" />
      <div className="product-card-info">
        <div className="product-card-info-badge">
          {/* 조건부 렌더링으로 아예 안 보이게 하기 (item?.choice === true??"사장Pick":"" 말고) */}
          {item.choice && <div className="choice">사장Pick</div>}
          {item.new && <div className="new">NEW</div>}
        </div>
        <div className="title">{item?.title}</div>
        {/* price 숫자로 바꾸고 천원 단위로 , 적용 */}
        <div className="price">
          \
          {isNaN(Number(item?.price))
            ? item?.price
            : Number(item?.price).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
