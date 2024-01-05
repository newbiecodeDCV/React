import './App.scss';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import { UserContext} from './Context/UseContext';
import { useContext, useEffect } from 'react';
import  AppRouter from './Routers/AppRouter';

function App() {
    const {user,loginContext} = useContext(UserContext)
    console.log(user)
    useEffect(()=> {
        if(localStorage.getItem('accessToken')){
         loginContext(localStorage.getItem('email'),localStorage.getItem('accessToken'))
        }
    },[])
    return (

        <>
            <div className="app-container">
                <Header />
                <Container>
                    <AppRouter/>
                </Container>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
           
          
        </>
    );
}

export default App;
