import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button, Col,Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './styles/home.scss';
const PeoplePage = () => {
    const navigate = useNavigate();
    const listCard = [
        { id: '1', title: 'Quản lý nhân khẩu', text: `Cung cấp thông tin về toàn bộ nhân khẩu trong
        chung cư, cho phép xóa và sửa thông tin nhân
        khẩu.`, link: '/people/list',img: '/people.png' },
        { id: '2', title: 'Quản lý hộ gia đình', text: ` Xem thông tin chi tiết về các hộ gia đình sinh
        sống trong chung cư, cho phép xóa toàn bộ nhân
        khẩu trong hộ, thay đổi mối quan hệ với chủ hộ`, link: '/people/household',img: '/family.png' },
        { id: '3', title: 'Quản lý tạm vắng', text: 'Danh sách tạm vắng của chung cư, cho phép kết thúc tạm vắng', link: '/people/listAbsent',img: '/absentList1.jpg' },
        { id: '4', title: 'Đăng ký cư trú', text: `Đăng ký cư trú cho nhân khẩu mới`, link: '/people/registerResidenceForm',img: '/register.png' },
        { id: '5', title: 'Đăng ký tạm vắng', text: 'Đăng ký tạm vắng cho nhân khẩu trong chung cư', link: '/people/addAbsent',img: '/absent.png' },
    ];

    return (
        <Container className="text-center mt-5">
            <h1>Quản lý cư trú</h1>
            <div>
                <div className="home-container">
                <Row>
                  {listCard.map((item)=>
                    <Col xs={1} md={2} lg={3} xl={4}>
                  <Card style={{ width: '18rem',height:'30rem' }} key={item.id} onClick={() => navigate(item.link)}>
                  <Card.Title style={{fontSize:'1.82rem'}}>{item.title}</Card.Title>
                  <Card.Img variant="right" src={ item.img } style={{ width: '100%', height: 'auto' }}/>
                  {/* <Link className='cards__item__link' to={'/Form'}> */}
                  <Card.Body>
                      
                      <Card.Text>
                          {item.text}
                      </Card.Text>
                  </Card.Body>
                  {/* </Link> */}
              </Card>
              </Col>
                  )}
                  </Row>
                </div>
            </div>
        </Container>
    );
};
export default PeoplePage;
