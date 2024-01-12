// InfoDisplay.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';

import { useLocation } from 'react-router-dom';
const InfoDisplay = () => {

    const location = useLocation();
    const data = location.state?.params || {};
    console.log(data)
  return (
    <Container>
      <Card bg="light" text="dark" style={{ margin: '20px' }}>
        <Card.Body>
          {data!== null && (
      <>
      <Card.Title>Thông tin cá nhân</Card.Title>
                    <Card.Text>Mã số: {data.item.id}</Card.Text>
                    <Card.Text>Họ tên: {data.item.name}</Card.Text>
                    <Card.Text>Ngày sinh: {data.item.dateOfBirth}</Card.Text>
                    <Card.Text>Quốc tịch: {data.item.nation}</Card.Text>
                    <Card.Text>Giới tính: {data.item.gender}</Card.Text>
                    <Card.Text>Dân tộc: {data.item.ethnic}</Card.Text>
                    <Card.Text>Tôn giáo: {data.item.religion}</Card.Text>
                    <Card.Text>Quê quán: {data.item.hometown}</Card.Text>
                    <Card.Text>Địa chỉ thường trú: {data.item.permanentAddress}</Card.Text>
                    <Card.Text>Số căn cước: {data.item.citizenId}</Card.Text>
                    <Card.Text>Nghề nghiệp: {data.item.career}</Card.Text>
                    <Card.Text>Số hiệu căn hộ: {data.item.apartmentId}</Card.Text>
                    <Card.Text>Email: {data.item.email}</Card.Text>
                    <Card.Text>Số điện thoại: {data.item.phoneNumber}</Card.Text>
                    <Card.Text>Trạng thái: { data.item.status}</Card.Text>
                    <Card.Text>Quan hệ với chủ hộ: {data.item.relationWithHouseholder}</Card.Text>
      </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default InfoDisplay;
