import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../Context/UseContext';
import logo from '../asset/image/images.jpg';
import { useEffect } from 'react';

const Header = (props) => {
  const { logout, user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const email = localStorage.getItem('email')
  const handleLogout = () => {
    logout();
    navigate('/');
    toast.success('Đăng xuất thành công');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ background: 'green' }}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="100" height="50" className="d-inline-block align-top" alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {((user && user.auth) || window.location.pathname === '/') && (
            <>
              <Nav className="me-auto" activeKey={location.pathname}>
                <NavLink to="/" className="nav-link">
                  Trang chủ
                </NavLink>
                <NavLink to="/peoplePage" className="nav-link">
                  Quản lí nhân khẩu
                </NavLink>
                <NavLink to="/apartments" className="nav-link">
                  Quản lí căn hộ
                </NavLink>
                <NavLink to="/admin" className="nav-link">
                  Quản lý ban quản trị
                </NavLink>
                <NavLink to="/feePage" className="nav-link">
                  Quản lý phí thu
                </NavLink>
              </Nav>
              <Nav>
                {email && <div className="nav-link">
                      {email}
                    </div>}
              </Nav>
              <Nav>
                {!user?.auth && <NavLink to="/login" className="nav-link">
                      Đăng nhập
                    </NavLink>}
                {user && user.auth && <NavDropdown title="Cài đặt">
                      {' '}
                      <NavDropdown.Item onClick={() => handleLogout()}>Đăng xuất</NavDropdown.Item>
                      <NavLink to="/password" className="dropdown-item">
                        Đổi Mật Khẩu
                      </NavLink>
                </NavDropdown>}
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
