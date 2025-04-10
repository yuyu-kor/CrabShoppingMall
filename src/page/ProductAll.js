import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/yuyu-kor/CrabShoppingMall/products/?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  useEffect(()=>{
    if (productList.length === 0 && query.get("q")) {
      alert ("찾으시는 상품이 존재하지 않습니다.");
    }
  },[productList]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
