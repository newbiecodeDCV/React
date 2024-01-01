import './App.scss';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import TableUser from './components/TableUser';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Intro from './componted/Intro/Intro';
import Footer  from './componted/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import RegisterResidenceForm from './components/RegisterResidenceForm';
import TableApartments from './components/TableApartments';
import TableManager from './components/TableManager';
function App() {
    return (
        <>
            <div className="app-container">
                <Header />
                <Container>
                    <Routes>
                        <Route
                            path="people/registerResidenceForm"
                            element={
                                <RegisterResidenceForm></RegisterResidenceForm>
                            }
                        />
                        <Route path="/home" element={<Home />} />
                        <Route path="/users" element={<TableUser />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/intro" element={<Intro />} />
                        <Route
                            path="/apartments"
                            element={<TableApartments />}
                        />
                        <Route path="/manager" element={<TableManager />} />
                    </Routes>
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
