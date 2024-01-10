import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/home.scss';
import { CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getProfile } from '../service/UserService';
const Dashboard = () => {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        handleGetProfile();
    }, []);
    const handleGetProfile = async () => {
        try {
            const profile = await getProfile();
            console.log(profile.data);
            setProfile(profile);
        } catch (error) {
            console.log('🚀 ~ handleGetProfile ~ error:', error);
        }
    };
    const getDay = (time)=> {
        return ((new Date().getTime() - new Date(time).getTime())/(1000*60*60*24)).toFixed(1)
    }
    const token = localStorage.getItem('accessToken');
    const BANNER =
        '/chon-mua-can-ho-can-trong-voi-nhung-toa-nha-hung-sat-nay.jpg';
    return (
        <div className="home-container">
            <Container>
                {token && Object.keys(profile).length !== 0 && (
                    <div>
                        <Row>
                            <Col>
                                <h1 style={{ color: '#3399FF' }}>
                                    {profile.data?.people?.name ? (
                                        <center>
                                            {' '}
                                            Xin chào{' '}
                                            {profile.data?.people?.name}
                                        </center>
                                    ) : (
                                        <center>
                                            {' '}
                                            Xin chào {profile.data?.email}{' '}
                                        </center>
                                    )}
                                </h1>
                                <br></br>

                                <p className="lead">
                                    Bạn đã đăng nhập với vai trò{' '}
                                    {profile.data?.role}.
                                </p>
                            </Col>
                        </Row>
                     <Row>
                     <Col>
                         <Card>
                             {/* <Link className='cards__item__link' to={'/Form'}> */}
                             <Card.Body>
                                 <Card.Title>
                                     Dòng thời gian
                                 </Card.Title>
                                 <Card.Text>
                                     Chúng ta đã bên nhau được {' '}
                                     {getDay(profile.data?.createdAt)}  ngày{' '} 🧨🧨🧨
                                 </Card.Text>
                             </Card.Body>
                             {/* </Link> */}
                         </Card>
                     </Col>
                     </Row>
                     </div>
                )}
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
                                    <h5 style={{ color: '#3399FF' }}>
                                        Liên hệ
                                    </h5>
                                    <p>Email: bluemoon20231@gmail.com</p>
                                    <p>Điện thoại: +84 123 456 789</p>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <h5>Địa chỉ</h5>
                                    <p>
                                        Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội
                                    </p>
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

export default Dashboard;
