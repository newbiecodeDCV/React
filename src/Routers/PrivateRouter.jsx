import { Fragment, useContext, useEffect } from 'react';
import { UserContext } from '../Context/UseContext';
import { Alert } from 'react-bootstrap';
const PrivateRoute = (props) =>{
    const {user} = useContext(UserContext);
    if(user && !user.auth){
       return (
    <>
        <Alert variant="danger" className='mt-3'>
        <Alert.Heading>Vui lòng đăng nhập !!!!</Alert.Heading>
        <p>
      
        </p>
      </Alert>
    </>
       )
       }

return(
    <>
    {props.children}
    </>   
    )

}
export default PrivateRoute