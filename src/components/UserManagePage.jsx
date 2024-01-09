import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './styles/home.scss';

const UserManagementPage = () => {
    const navigate = useNavigate();
    const managerListCard = [
        {
            id: '1',
            title: 'Danh sách thành viên ban quản trị',
            text: `Cung cấp thông tin về toàn bộ thành viên ban quản trị, cho phép xóa người dùng`,
            link: '/admin/list',
        },
        {
            id: '2',
            title: 'Thêm mới thành viên ban quản trị',
            text: `Cung cấp tài khoản cho nhân khẩu trúng cử làm thành viên ban quản trị`,
            link: '/admin/addAdmin',
        },
    ];
    const adminListCard = [
        {
            id: '1',
            title: 'Danh sách thành viên ban quản trị',
            text: `Cung cấp thông tin về toàn bộ thành viên ban quản trị`,
            link: '/admin/list',
        },
    ];
    const role = localStorage.getItem('role');
    return (
        <Container className="text-center mt-5">
            <h1>Quản lý ban quản trị</h1>
            <div>
                <div className="home-container">
                    {role === 'Quản lý'
                        ? managerListCard.map((item) => (
                              <Card
                                  key={item.id}
                                  onClick={() => navigate(item.link)}
                              >
                                  {/* <Link className='cards__item__link' to={'/Form'}> */}
                                  <Card.Body>
                                      <Card.Title>{item.title}</Card.Title>
                                      <Card.Text>{item.text}</Card.Text>
                                  </Card.Body>
                                  {/* </Link> */}
                              </Card>
                          ))
                        : adminListCard.map((item) => (
                              <Card
                                  key={item.id}
                                  onClick={() => navigate(item.link)}
                              >
                                  {/* <Link className='cards__item__link' to={'/Form'}> */}
                                  <Card.Body>
                                      <Card.Title>{item.title}</Card.Title>
                                      <Card.Text>{item.text}</Card.Text>
                                  </Card.Body>
                                  {/* </Link> */}
                              </Card>
                          ))}
                </div>
            </div>
        </Container>
    );
};
export default UserManagementPage;
