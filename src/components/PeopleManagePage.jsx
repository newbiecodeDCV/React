import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const PeoplePage = () => (
  <Container className="text-center mt-5">
    <h1>Chọn chức năng</h1>
    <div className="d-flex flex-column align-items-center">
      <Link to="/people/list" className="mb-3">
        <button  className="func-card func1">Danh sách nhân khẩu</button>
      </Link>
      <Link to="/people/registerResidenceForm" className="mb-3">
        <button className="func-card func2">Đăng ký cư trú</button>
      </Link>
    </div>
  </Container>
);

export default PeoplePage;
