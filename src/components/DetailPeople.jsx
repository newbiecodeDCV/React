// InfoDisplay.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useData6 } from '../Context/UseContext';
const InfoDisplay = () => {
    const{data} = useData6()
  return (
    <Container>
      <Card bg="light" text="dark" style={{ margin: '20px' }}>
        <Card.Body>
          {data!== null && (
      <>
      <Card.Title>Thông tin cá nhân</Card.Title>
                    <Card.Text>Mã số: {data.id}</Card.Text>
                    <Card.Text>Họ tên: {data.name}</Card.Text>
                    <Card.Text>Ngày sinh: {data.dateOfBirth}</Card.Text>
                    <Card.Text>Quốc tịch: {data.nation}</Card.Text>
                    <Card.Text>Giới tính: {data.gender}</Card.Text>
                    <Card.Text>Dân tộc: {data.ethnic}</Card.Text>
                    <Card.Text>Tôn giáo: {data.religion}</Card.Text>
                    <Card.Text>Quê quán: {data.hometown}</Card.Text>
                    <Card.Text>Địa chỉ thường trú: {data.permanentAddress}</Card.Text>
                    <Card.Text>Số căn cước: {data.citizenId}</Card.Text>
                    <Card.Text>Nghề nghiệp: {data.career}</Card.Text>
                    <Card.Text>Số hiệu căn hộ: {data.apartmentId}</Card.Text>
                    <Card.Text>Email: {data.email}</Card.Text>
                    <Card.Text>Số điện thoại: {data.phoneNumber}</Card.Text>
                    <Card.Text>Trạng thái: { data.status}</Card.Text>
                    <Card.Text>Quan hệ với chủ hộ: {data.relationWithHouseholder}</Card.Text>
      </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default InfoDisplay;
