import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './styles/home.scss';

const PeoplePage = () => {
    const navigate = useNavigate();
    const listCard = [
        { id: '1', title: 'Quản lý nhân khẩu', text: `Cung cấp thông tin về toàn bộ nhân khẩu trong
        chung cư, cho phép xóa và sửa thông tin nhân
        khẩu.`, link: '/people/list' },
        { id: '2', title: 'Đăng ký cư trú', text: `Đăng ký cư trú cho nhân khẩu mới`, link: '/people/registerResidenceForm' },
        { id: '3', title: 'Thông tin hộ gia đình', text: ` Xem Thông tin chi tiết về các hộ gia đình sinh
        sống trong chung cư, cho phép xóa toàn bộ nhân
        khẩu trong hộ`, link: '/people/household' },
        { id: '4', title: 'Đăng ký tạm vắng', text: 'Đăng ký tạm vắng cho nhân khẩu trong chung cư', link: '/people/addAbsent' },
        { id: '5', title: 'Quản lý tạm vắng', text: 'Danh sách tạm vắng của chung cư, cho phép kết thúc tạm vắng', link: '/people/listAbsent' },
    ];

    return (
        <Container className="text-center mt-5">
            <h1>Quản lý cư trú</h1>
            <div>
                <div className="home-container">
                  {listCard.map((item)=>
                  <Card key={item.id} onClick={() => navigate(item.link)}>
                  <Card.Img variant="top" src={ '/chon-mua-can-ho-can-trong-voi-nhung-toa-nha-hung-sat-nay.jpg'} />
                  {/* <Link className='cards__item__link' to={'/Form'}> */}
                  <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                          {item.text}
                      </Card.Text>
                  </Card.Body>
                  {/* </Link> */}
              </Card>
                  )}
                    
                </div>
            </div>
        </Container>
    );
};
export default PeoplePage;
