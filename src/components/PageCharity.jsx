// Page1.js
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ModalCharity from './ModalCharity';

const Page1 = () => {
   const [isShowModalCharity,SetIsShowModalCharity] = useState(false)
  

   const handleClose = () =>{
    SetIsShowModalCharity(false)
   }
   
   const handleModalCharityClick = () => {
    SetIsShowModalCharity(true);
  };
 
 
   return(
  <Container className="text-center mt-5">
    <h1>Trang 1</h1>
    <p>Chọn một chức năng để tiếp tục.</p>
    <Row className="justify-content-center">
      <Col md={3}>
        <Link to="/peePage/page1/func1">
          <Button variant="primary" size="lg" block
          >
            Danh sách các khoản từ thiện
          </Button>
        </Link>
      </Col>
      <Col md={3}>
   
          <Button variant="success"
           size="lg" 
           block
          onClick={handleModalCharityClick }>
            Thêm các khoản phí từ thiện
          </Button>
    
      </Col>
      
    </Row>
    <ModalCharity
           show={isShowModalCharity}
           handleClose = {handleClose}
           />
  </Container>
  
   
);
   };

export default Page1;
