import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteFee } from '../service/FeeService';
import { toast } from 'react-toastify';
const ModalDeleteFee = (props) => {
    const { show, handleClose, id, getPeeDV } = props;
    const handleDelete = async () => {
        try {
            let res = await deleteFee(id);
            console.log(res);
            if (res && res.status === 'Success') {
                handleClose();
                toast.success('Xóa Thành Công');
                getPeeDV();
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

export default ModalDeleteFee;
