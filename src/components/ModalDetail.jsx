import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDetail(props) {
  const { show, handle2Close, data } = props;

  return (
    <>
      <Modal show={show} onHide={handle2Close}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin chi tiết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>apartmentId: {data.apartmentId}</p>
          <p>dateOfBirth: {data.dateOfBirth}</p>
          <p>email: {data.email}</p>
          <p>ethnic: {data.ethnic}</p>
          <p>gender: {data.gender}</p>
          <p>homeTown: {data.homeTown}</p>
          <p>name: {data.name}</p>
          <p>nation: {data.nation}</p>
          <p>permanentAddress: {data.permanentAddress}</p>
          <p>phoneNumber :{data.phoneNumber}</p>
          <p>relationWithHouseholder:{data.relationWithHouseholder}</p>
          <p>religion:{data.religion}</p>
          <p>status :{data.status}</p>
          <p></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handle2Close}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDetail;
