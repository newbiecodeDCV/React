import React from 'react';
import FormGuest from '../components/FormGuest';
import TableForm from '../components/TableForm';
import Login from '../components/login';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import PrivateRoute from './PrivateRouter';
import RegisterResidenceForm from '../components/RegisterResidenceForm';
import TableApartments from '../components/TableApartments';
import TableManager from '../components/TableManager';
import Page from '../components/FeePage';
import Page1 from '../components/PageCharity';
import TableCharity from '../components/TableCharity';
import TableCharityFee from '../components/TableCharityFee';
import TableDonate from '../components/TableDonate';
import PeoplePage from '../components/PeopleManagePage';
import PageDV from '../components/PageFeeDV';
import TableFeeDV from '../components/TableFeeDV';
import TableFeeDept from '../components/TableFeeDept';
import TableFeeBillAprt from '../components/TableBillAprt';
import TableBill from '../components/TableBill';
import TablePeople from '../components/TablePeople';
import HouseHold from '../components/Household';
import AddAdmin from '../components/AddAdmin';
import FormPassWord from '../components/FormPassWord';
import AddAbsent from '../components/AddAbsent';
import TableAbsent from '../components/TableAbsent';
const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<FormGuest />} />
        <Route path="/Tableform" element={<TableForm />} />
        <Route
          path="people/registerResidenceForm"
          element={
            <PrivateRoute>
             <RegisterResidenceForm />
            </PrivateRoute>
          }
        />
          <Route
          path="people/list"
          element={
            <PrivateRoute>
              <TablePeople/>
            </PrivateRoute>
          }
        />
         <Route path="/password" element={<PrivateRoute><FormPassWord /></PrivateRoute>} />
         <Route path="/peoplePage" element={<PrivateRoute><PeoplePage /></PrivateRoute>} />
         <Route path="/peePage" element={<PrivateRoute><Page/></PrivateRoute>} />
         <Route path="/apartments"element={<PrivateRoute><TableApartments /></PrivateRoute>}  />
         <Route path="/admin" element={<PrivateRoute><TableManager /></PrivateRoute>} />
         <Route path="/peePage/page1" element={<PrivateRoute><Page1 /></PrivateRoute>} />
         <Route path="/peePage/page1/func1" element={<PrivateRoute><TableCharity/></PrivateRoute>} />
         <Route path="/peePage/page1/func4" element={<PrivateRoute><TableCharityFee/></PrivateRoute>} />
         <Route path="/peePage/page1/func2" element={<PrivateRoute><TableDonate/></PrivateRoute>} />
         <Route path="/peePage/page2" element={<PrivateRoute><PageDV /></PrivateRoute>} />
         <Route path="/peePage/page2/func1" element={<PrivateRoute><TableFeeDV /></PrivateRoute>} />
         <Route path="/peePage/page2/func2" element={<PrivateRoute><TableFeeDept /></PrivateRoute>} />
         <Route path="/peePage/page2/func3" element={<PrivateRoute><TableFeeBillAprt /></PrivateRoute>} />
         <Route path="/peePage/page2/func4" element={<PrivateRoute><TableBill /></PrivateRoute>} />
         <Route path="/form" element={<PrivateRoute><FormGuest /></PrivateRoute>} />
         <Route path="/Tableform" element={<PrivateRoute>< TableForm/></PrivateRoute>} />
         <Route path='/people/household' element={<PrivateRoute><HouseHold/></PrivateRoute>}></Route>
         <Route path='/admin/addAdmin' element={<PrivateRoute><AddAdmin/></PrivateRoute>}></Route>
         <Route path='/people/addAbsent' element={<PrivateRoute><AddAbsent/></PrivateRoute>}></Route>
         <Route path='/people/listAbsent' element={<PrivateRoute><TableAbsent/></PrivateRoute>}></Route>
        </Routes>
     
    </>
  );
};

export default AppRouter;
