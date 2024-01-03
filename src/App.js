import './App.scss';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import TableUser from './components/TableUser';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import { ToastContainer } from 'react-toastify';
import RegisterResidenceForm from './components/RegisterResidenceForm';
import TableApartments from './components/TableApartments';
import TableManager from './components/TableManager';
import Page from './components/PeePage';
import Page1 from './components/PageCharity';
import TableCharity from './components/TableCharity';
import TableCharityPee from './components/TableCharityPee';
import { DataProvider1,DataProvider2 } from './Context/UseContext';
import TableDonate from './components/TableDonate';
function App() {
    return (

        <>
         <DataProvider1>
         <DataProvider2>
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
                        <Route path="/peePage" element={<Page/>} />
                        <Route path="/apartments"element={<TableApartments />}  />
                        <Route path="/manager" element={<TableManager />} />
                        <Route path="/peePage/page1" element={<Page1 />} />
                        <Route path="/peePage/page1/func1" element={<TableCharity/>} />
                        <Route path="/peePage/page1/func4" element={<TableCharityPee/>} />
                        <Route path="/peePage/page1/func2" element={<TableDonate/>} />
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
            </DataProvider2>
            </DataProvider1>
          
        </>
    );
}

export default App;
