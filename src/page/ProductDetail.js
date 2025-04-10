import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/yuyu-kor/CrabShoppingMall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return <Container>
    <Row>
      <Col className="product-img">
        <img src={product?.img}/>
      </Col>
      <Col className="product-detail-info">
        <div className="product-card-info-badge">
          <div className="choice">사장Pick</div>
          <div className="new">NEW</div>
        </div>
        <h2>{product?.title}</h2>
        <div className="price">
          \
          {isNaN(Number(product?.price))
            ? product?.price
            : Number(product?.price).toLocaleString()}
        </div>
        <div className="product-size-btn">
          <DropdownButton id="dropdown-basic-button" title="사이즈">
          <Dropdown.Item href="#/action-1">소</Dropdown.Item>
          <Dropdown.Item href="#/action-2">중</Dropdown.Item>
          <Dropdown.Item href="#/action-3">대</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <button className="product-add-btn">추가</button>
        </div>
      </Col>
    </Row>
  </Container>
};

export default ProductDetail;
