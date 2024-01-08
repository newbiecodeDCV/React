import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';


const PeoplePage = () => (
  <Container className="text-center mt-5">
    <h1>Chọn chức năng</h1>
    <div className="d-flex flex-column align-items-center">
      <Link to="/people/list" className="mb-3">
        <Button className="func-card func1">Danh sách nhân khẩu</Button>
      </Link>
      <Link to="/people/registerResidenceForm" className="mb-3">
        <Button className="func-card func2">Đăng ký cư trú</Button>
      </Link>
      <Link to="/people/household" className="mb-3">
        <Button className="func-card func1">Thông tin hộ gia đình</Button>
      </Link>
      <Link to="/people/addAbsent" className="mb-3">
        <Button className="func-card func1">Đăng ký tạm vắng</Button>
      </Link>
      <Link to="/people/listAbsent" className="mb-3">
        <Button className="func-card func1">Danh sách tạm vắng</Button>
      </Link>
    </div>
  </Container>
);

export default PeoplePage;
