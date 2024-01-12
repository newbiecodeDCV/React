import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDetailAprt(props) {
  const { show, handle3Close, data } = props;

  return (
    <>
      <Modal show={show} onHide={handle3Close}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin chi tiết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {data.owner !== null && (
      <>
        <p>Họ tên: {data.owner?.name}</p>
        <p>Quốc tịch: {data.owner?.nation}</p>
        <p>Ngày sinh: {data.owner?.dateOfBirth}</p>
        <p>Số căn cước: {data.owner?.citizenId}</p>
        <p>Số điện thoại: {data.owner?.phoneNumber}</p>
        <p>Địa chỉ thường trú: {data.owner?.permanentAddress}</p>
      </>
    )} 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handle3Close}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDetailAprt;
