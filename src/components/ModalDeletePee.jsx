import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deletePee } from '../service/UserService';
import { toast } from 'react-toastify';
const ModalDeletePee =(props) => {
  const {show,handleClose,id,getPeeDV} = props
   const handleDelete = async () =>{
     try{
        let res = await deletePee(id)
        console.log(res)
        if (res && res.status === 'Success'){
            handleClose()
            toast.success("Xóa Thành Công")
            getPeeDV()
        }else{
            toast.error("Thất bại")
        }
    }catch(e){
        console.log(e)
    }
   }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Xóa phí</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Bạn muốn tiếp tục xóa.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary"
        onClick={handleDelete}
        >Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDeletePee;
