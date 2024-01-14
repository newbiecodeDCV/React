import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVehicle } from '../service/PeopleService';
import { toast } from 'react-toastify';
const ModalDeleteVehicle = (props) => {
    const { show, handleClose, numberPlate, getCF } = props;
    const handleDelete = async () => {
        try {
            let res = await deleteVehicle(numberPlate);
            console.log('Check',res);
            if (res && res.status === 'Success') {
                toast.success("Xóa thành công")
                handleClose();
                getCF(1);
            }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Bạn có chắc chắn xóa</Modal.Title>
            </Modal.Header>

            <Modal.Body>{props.children}</Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={handleDelete}>
                    Xác nhận
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalDeleteVehicle;
