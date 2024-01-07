import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <Container>
        <Row>
          <Col>
            <h1 className="display-4">Welcome to Our Modern Website</h1>
            <p className="lead">
              Your journey to a visually appealing and modern-looking website starts here.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Prominent Headline</Card.Title>
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
                <Card.Title>Another Headline</Card.Title>
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
      </Container>
    </div>
  );
};

export default Home;
