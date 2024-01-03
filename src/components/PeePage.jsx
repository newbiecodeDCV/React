// Page1.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Page = () => (
  <Container className="text-center mt-5">
    <h1>Các khoản phí</h1>
    <div className="d-flex flex-column align-items-center">
      <Link to="/peePage/page1" className="mb-3">
        <button  className="func-card func1">Phí đóng góp từ thiện</button>
      </Link>
      <Link to="/page1/func2" className="mb-3">
        <button className="func-card func2">Phí dịch vụ</button>
      </Link>
    </div>
  </Container>
);

export default Page;
