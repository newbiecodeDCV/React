import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../service/UserService';
import { toast } from 'react-toastify';
const ModalDelete =(props) => {
  const {show,handleClose,id,getManager} = props
   const handleDelete = async () =>{
     try{
        let res = await deleteUser(id)
        if (res && res.status === 'Success'){
            handleClose()
            toast.success("Xóa Thành Công")
            getManager()
        }
    }catch(e){
        console.log(e)
    }
   }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Xóa người dùng</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Bạn chắc chắn muốn xóa.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary"
        onClick={handleDelete}
        >Xác nhận</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDelete;
