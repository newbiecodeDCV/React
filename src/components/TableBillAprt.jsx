import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useData3 } from '../Context/UseContext';
import { getPeeBill } from '../service/UserService';

const TablePeeBillAprt = () =>{
    const {apartmentId,month,year} = useData3()
    const [listRecord,setListRecord] = useState('')
    
      useEffect(() =>{
        //call API
       getpeebill();
   },[])
    const getpeebill = async () =>{
      let res = await getPeeBill(apartmentId,month,year)
      console.log(res)
      setListRecord(res.record)
    }
    return (

        <>
        <div className ="my-3 add-new">
           <span> <b>Hóa đơn</b></span>
        </div>     

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tên phí</th>
              <th>Tổng phí</th>
              <th>Trạng thái</th>
              <th>Ngày nộp</th>
              <th>Người nộp</th>
            </tr>
          </thead>
          <tbody>
          {listRecord && listRecord.length > 0 &&
              listRecord.map((item, index) => (
                <tr key={`user-${index}`}>
                  <td>{item.fee.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.status}</td>
                  <td>{item.payDay}</td>
                  <td>{item.payerName}</td>
                </tr>
              ))}   
          </tbody>
        </Table>
       </>
         
    );
    
}
export default TablePeeBillAprt;