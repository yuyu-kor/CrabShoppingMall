import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/yuyu-kor/CrabShoppingMall/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
