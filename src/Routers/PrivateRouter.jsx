import { Fragment, useContext, useEffect } from 'react';
import { UserContext } from '../Context/UseContext';
import { Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const PrivateRoute = (props) => {
    const requiredRole = props.role;
    const userRole = localStorage.getItem('role');
    const { user } = useContext(UserContext);
    const token = localStorage.getItem('accessToken');
    const navigate = useNavigate();
    if (!token) {
        return (
            <>
                <Alert variant="danger" className="mt-3">
                    <Alert.Heading>Vui lòng đăng nhập !!!!</Alert.Heading>
                    <p>
                        <Button
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            Quay lại
                        </Button>
                        {' '}
                        <Button
                            onClick={() => {
                                navigate('/login');
                            }}
                        >
                            Đăng nhập
                        </Button>
                    </p>
                </Alert>
            </>
        );
    }
    if(requiredRole && userRole!==requiredRole){
      return (
        <>
            <Alert variant="danger" className="mt-3">
                <Alert.Heading>Chức năng này không dành cho bạn !!!!</Alert.Heading>
                <p>
                    <Button
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        Quay lại trang chủ
                    </Button>
                </p>
            </Alert>
        </>
    );
    }

    return <>{props.children}</>;
};
export default PrivateRoute;
