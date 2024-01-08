import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/home.scss';
import FluidExample from './Image';
import {
  Button,
  Alert,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "react-bootstrap";
const Home = () => {
  const BANNER = "/chon-mua-can-ho-can-trong-voi-nhung-toa-nha-hung-sat-nay.jpg";
  return (
    <div className="home-container">
      <Container>
        <Row>
          <Col>
          <h1 style={{ color: 'green' }}>
                <center>Chào mừng đến chung cư BlueMoon</center>
            </h1>
 
            <p className="lead">
              Đây là trang web quản lí cư dân chưng cư BlueMoon.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title style={{ color: 'green' }}>Prominent Headline</Card.Title>
                <Card.Text>
                  Some text to describe the prominent headline section. This can include additional
                  information or details about the content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="h3 mb-2 pt-2 
                    font-weight-bold text-secondary">Another Headline</Card.Title>
                <Card.Text>
                  More text for another headline section. You can customize this content as needed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Product Listing</Card.Title>
                <Card.Text>
                  Include your product listing or similar content here. You can use Card components
                  to display each product.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card>
            <CardImg
            
                top
                width="30%"
                src={BANNER}
                alt="banner"
            />
        </Card>
          </Col>
        </Row>
        <div>
      <footer className="footer">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <h5>Liên hệ</h5>
              <p>Email: bluemoon@gmai.com</p>
              <p>Điện thoại: +84 123 456 789</p>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <h5>Địa chỉ</h5>
              <p>Số 1,Đại Cồ Việt,Hai Bà Trưng,Hà Nội</p>
            </Col>
            <Col xs={12} md={4}>
              <h5>Theo dõi chúng tôi</h5>
              <p>Facebook | Twitter | Instagram</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
      </Container>
    </div>
  );
};

export default Home;
