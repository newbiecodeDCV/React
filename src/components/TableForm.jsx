import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { getGust} from '../service/UserService';
import { useData5 } from '../Context/UseContext';

const TableForm =  () => {
    const {apartmentId,citizenId} = useData5()
    const [listPee,setListPee] = useState('')
    useEffect(() => {
        //call API
        getgust();
    }, []);


    const getgust = async () =>{
        try{
        let res = await  getGust(apartmentId,citizenId)
        console.log(res)
        setListPee(res.data.record)
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
              <th>Tên Phí</th>
              <th>Tháng</th>
              <th>Năm</th>
              <th>Trạng Thái</th>
              <th>Người nộp</th>
              <th>Nộp ngày</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
          {listPee && listPee.length > 0 &&
          listPee.map((item,index) =>(
            <tr key={`user-${index}`}>
                                <td>{item.fee.name}</td>
                                <td>{item.month}</td>
                                <td>{item.year}</td>
                                <td>{item.status}</td>
                                <td>{item.payerName}</td>
                                <td>{item.payDay}</td>
                                <td>{item.amount}</td>
                                </tr>
          ))}
         </tbody>
          </Table>
          </>
    )
              }
export default TableForm