import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { getGust} from '../service/UserService';
import { useData5 } from '../Context/UseContext';

const TableForm =  () => {
    const {apartmentId,citizenId} = useData5()

    useEffect(() => {
        //call API
        getgust();
    }, []);


    const getgust = async () =>{
        try{
        let res = getGust(apartmentId,citizenId)
        console.log(res)
        }catch(e){
            console.log(e)
        }
        
    }
    return (
        <>
        <div className ="my-3 add-new">
           <span> <b>Danh sách ban quản trị</b></span>
        </div>     

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Họ Tên</th>
              <th>Số Phòng</th>
              <th>Email tài khoản</th>
              <th>Số điện thoại</th>
            </tr>
          </thead>
          <tbody>
           
                  <td>item.people.name</td>
                  <td>item.people.apartmentId</td>
                  <td>item.email</td>
                  <td>item.people.phoneNumbe</td>
               
          </tbody>
          </Table>
          </>
    )
              }
export default TableForm