import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../asset/image/images.jpg'
import { useLocation,NavLink,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Header = (props) => {
    const navigate = useNavigate();
    const location  = useLocation();
    const handleLogout = ()=>{
      localStorage.removeItem("accessToken")
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
          <Nav className="me-auto" activeKey={location.pathname} >
            <NavLink to ='/home' className="nav-link">Trang chủ</NavLink>
        
            <NavLink to ='/peoplePage' className="nav-link">Quản lí nhân khẩu</NavLink>
            <NavLink to ='/apartments' className="nav-link">Quản lí căn hộ</NavLink>
            <NavLink to ='/admin' className="nav-link">Danh sách quản lí</NavLink>
            <NavLink to ='/peePage' className="nav-link">Quản lý phí thu</NavLink>
            </Nav>
            <Nav>
            <NavDropdown title="Setting" >
              <NavLink to ='/login' className="dropdown-item">Login</NavLink>
              <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse >
      </Container>
    </Navbar>
    );

}
export default Header;