import React from 'react';
import FormGuest from '../components/FormGuest';
import TableForm from '../components/TableForm';
import Login from '../components/login';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import PrivateRoute from './PrivateRouter';
import RegisterResidenceForm from '../components/RegisterResidenceForm';
import TableApartments from '../components/TableApartments';
import TableUser from '../components/TableUser';
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
import TableAdminForGuest from '../components/TableAdminForGuest';
import Dashboard from '../components/Dashboard';
import UserManagementPage from '../components/UserManagePage';
import InfoDisplay from '../components/DetailPeople';
const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<FormGuest />} />
        <Route path="/Tableform" element={<TableForm />} />
        <Route path='/AdminInfo' element={<TableAdminForGuest/>}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
             <Dashboard />
            </PrivateRoute>
          }
        />
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
         <Route path="/feePage" element={<PrivateRoute><Page/></PrivateRoute>} />
         <Route path="/apartments"element={<PrivateRoute><TableApartments /></PrivateRoute>}  />
         <Route path="/admin/list" element={<PrivateRoute><TableUser /></PrivateRoute>} />
         <Route path="/feePage/charity/listFee" element={<TableCharity/>} />
         <Route path="/feePage/charity/fund" element={<TableCharityFee/>} >
            <Route path=":feeId" element={<TableCharityFee />} />
         </Route>
         <Route path="/feePage/charity/addDonate" element={<PrivateRoute><TableDonate/></PrivateRoute>} >
            <Route path=":feeId" element={<TableDonate />} />
          </Route>
         <Route path="/feePage/fee/listFee" element={<PrivateRoute><TableFeeDV /></PrivateRoute>} />
         <Route path="/feePage/fee/debtBill" element={<PrivateRoute><TableFeeDept /></PrivateRoute>} />
         {/* use context ?? */}
         <Route path="/feePage/fee/billOfApartment" element={<PrivateRoute><TableFeeBillAprt /></PrivateRoute>}>
                <Route path=":apartmentId" element={<TableFeeBillAprt />} />
          </Route>
         <Route path="/feePage/fee/listBill" element={<PrivateRoute><TableBill /></PrivateRoute>} />
         <Route path="/form" element={<PrivateRoute><FormGuest /></PrivateRoute>} />
         <Route path="/Tableform" element={<PrivateRoute>< TableForm/></PrivateRoute>} />
         <Route path='/people/household' element={<PrivateRoute><HouseHold/></PrivateRoute>}></Route>
         <Route path='/admin/addAdmin' element={<PrivateRoute role='Quản lý'><AddAdmin/></PrivateRoute>}></Route>
         <Route path='/people/addAbsent' element={<PrivateRoute><AddAbsent/></PrivateRoute>}></Route>
         <Route path='/people/listAbsent' element={<PrivateRoute><TableAbsent/></PrivateRoute>}></Route>
         <Route path='/admin' element={<PrivateRoute><UserManagementPage/></PrivateRoute>}></Route>
         <Route path='/display' element={<PrivateRoute><InfoDisplay/></PrivateRoute>}></Route>
        </Routes>
     
    </>
  );
};

export default AppRouter;
