// Page1.js
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
const Page1 = () => {  
 return(
  <Container className="text-center mt-5">
    <h1>Phí từ thiện</h1>
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
      
    </Row>
   
  </Container>
  
   
);
   };

export default Page1;
