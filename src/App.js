import './App.scss';
import Header from './componted/Header';
import Container from 'react-bootstrap/Container';
import TableUser from './componted/TableUser';
import Home  from './componted/Home';
import { Routes, Route } from "react-router-dom";
import Login from './componted/login';
import { ToastContainer} from "react-toastify";
function App() {
  return (
    <>
   <div className = 'app-container'>
   <Header />
   <Container>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<TableUser />} />
        <Route path="/login" element={<Login />} />
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
<ToastContainer />


   </>

 
  );
}

export default App;
