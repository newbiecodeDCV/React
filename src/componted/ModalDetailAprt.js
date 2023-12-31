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
        <p>name:{data.owner?.name}</p>
        <p>nation:{data.owner?.nation}</p>
        <p>dateOfBirth:{data.owner?.dateOfBirth}</p>
        <p>citizenId:{data.owner?.citizenId}</p>
        <p>phoneNumber:{data.owner?.phoneNumber}</p>
        <p>permanentAddress:{data.owner?.permanentAddress}</p>
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
