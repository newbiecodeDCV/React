import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button,Row,Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import './styles/home.scss';

const UserManagementPage = () => {
    const navigate = useNavigate();
    const managerListCard = [
        {
            id: '1',
            title: 'Danh sách thành viên ban quản trị',
            text: `Cung cấp thông tin về toàn bộ thành viên ban quản trị, cho phép xóa`,
            link: '/admin/list',
            img:'admin.jpg'
        },
        {
            id: '2',
            title: 'Thêm mới thành viên ban quản trị',
            text: `Cung cấp tài khoản cho nhân khẩu trúng cử làm thành viên ban quản trị`,
            link: '/admin/addAdmin',
            img:'addAdmin.png'
        },
    ];
    const adminListCard = [
        {
            id: '1',
            title: 'Danh sách thành viên ban quản trị',
            text: `Cung cấp thông tin về toàn bộ thành viên ban quản trị`,
            link: '/admin/list',
            img:'admin.jpg'
        },
    ];
    const role = localStorage.getItem('role');
    return (
        <Container className="text-center mt-5">
        <h1>Quản lý cư trú</h1>
        <div>
            <div className="home-container">
            <Row>
              {role == 'Quản lý'&& managerListCard.map((item)=>
                <Col xs={12} md={5} lg={4} xl={4} className="d-flex flex-column" key={item.id}>
              <Card className="d-flex flex-column" style={{ width: '18rem',height:'30rem' }} key={item.id} onClick={() => navigate(item.link)}>
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
              {role == 'Thành viên ban quản trị'&& adminListCard.map((item)=>
                <Col xs={12} md={5} lg={4} xl={4} className="d-flex flex-column" key={item.id}>
              <Card className="d-flex flex-column" style={{ width: '18rem',height:'30rem' }} key={item.id} onClick={() => navigate(item.link)}>
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
export default UserManagementPage;
