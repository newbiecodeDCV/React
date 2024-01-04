// Page1.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import ModalAddPeeDV from './ModalAddPeeDV';
import ModalBillPhong from './ModalBillPhong';
import ModalPatchBill from './ModalPatchBill';
import ModalBill from './ModalBill';
const PageDV = () => {
    const [isShowModalAddPeeDV,setIsShowModalAddPeeDV] = useState(false)
    const [isShơModalBillPhong,setIsShowModalBillPhong] = useState(false)
    const [isShowModalPatchBill,setIsShowModalPatchBill] = useState(false)
    const [isShowModalBill,setIsShowModalBill] = useState(false)
    const handleClose = () =>{
        setIsShowModalAddPeeDV(false)
    }
    const handleOpen = () =>{
        setIsShowModalAddPeeDV(true)
    }
    const handleClose1 = () =>{
      setIsShowModalBillPhong(false)
    }
    const handleOpen1 = () =>{
      setIsShowModalBillPhong(true)
    }
    const handleClose3 = () =>{
      setIsShowModalPatchBill(false)
    }
    const handleOpen3 = () =>{
      setIsShowModalPatchBill(true)
    }
    const handleClose4 = () =>{
      setIsShowModalBill(false)
    }
    const handleOpen4 = () =>{
      setIsShowModalBill(true)
    }
  return(
  <Container className="text-center mt-5">
    <h1>Chức năng</h1>
    <div className="d-flex flex-column align-items-center">
        <button className="func-card func1 mb-3"
        onClick={handleOpen}
        >Tạo phí mới</button>
      <Link to="/peePage/page2/func1" className="mb-3">
        <button className="func-card func2">Phí dịch vụ</button>
      </Link>
      <Link to="/peePage/page2/func2" className="mb-3">
        <button className="func-card func3">Danh sách hóa đơn bị nợ</button>
      </Link>
        <button className="func-card func4 mb-3"
        onClick={handleOpen1}
        >Tra cứu hóa đơn căn hộ</button>
    
        <button className="func-card func5 mb-3"
        onClick={handleOpen3}
        >Đóng Tiền</button>
        <button className="func-card func6"
        onClick={handleOpen4}
        >Tra cứu hóa đơn </button>
    </div>
    <ModalAddPeeDV
    show = {isShowModalAddPeeDV}
    handleClose = {handleClose}
    />
    <ModalBillPhong
    show ={isShơModalBillPhong}
    handleClose={handleClose1}
    />
    <ModalPatchBill
    show = {isShowModalPatchBill}
    handleClose = {handleClose3}
    />
    <ModalBill
    show = {isShowModalBill}
    handleClose = {handleClose4}
    />
  </Container>
  
);
  };

export default PageDV;
