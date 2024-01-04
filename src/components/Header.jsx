import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../asset/image/images.jpg'
import { useLocation,NavLink,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { UserContext } from '../Context/UseContext';
import { useEffect } from 'react';
const Header = (props) => {
  const {logout,user} = useContext(UserContext)
    const navigate = useNavigate();
    const location  = useLocation();
   
    const handleLogout = ()=>{
      logout()
      navigate("/login");
      toast.success("Đăng xuất thành công");
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
        <img
              src={logo}
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            {/* <span> App </span> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {(user && user.auth || window.location.pathname ==='/')&&
        <>
          <Nav className="me-auto" activeKey={location.pathname} >
            <NavLink to ='/home' className="nav-link">Trang chủ</NavLink>
        
            <NavLink to ='/peoplePage' className="nav-link">Quản lí nhân khẩu</NavLink>
            <NavLink to ='/apartments' className="nav-link">Quản lí căn hộ</NavLink>
            <NavLink to ='/admin' className="nav-link">Danh sách quản lí</NavLink>
            <NavLink to ='/peePage' className="nav-link">Quản lý phí thu</NavLink>
            <NavLink to ='/Form' className="nav-link">Tra cứu</NavLink>
            </Nav>
            <Nav>
            <NavDropdown title="Setting" >
            {user && user.auth
            ?  <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
             : <NavLink to ='/login' className="dropdown-item">Login</NavLink>
            }
            </NavDropdown>
            </Nav>
            </>
          }
        </Navbar.Collapse >
      </Container>
    </Navbar>
    );

}
export default Header;