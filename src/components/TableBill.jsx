import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useData4 } from '../Context/UseContext';
import { getBill } from '../service/UserService';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
const TableBill = () =>{
    const {month,year,status} = useData4()
    const [totalPage,setTotalPage] = useState('')
    const [paymentList,setPaymentList] = useState([])
      useEffect(() =>{
        //call API
       getbill(1);
   },[])
    const getbill = async (page) =>{
    try{
      let res = await getBill(page,month,year)
      setTotalPage(res.data.totalPage)
      setPaymentList(res.data.paymentList)
      console.log(res)
      if(res && res.status ==="Success"){
      toast.success("Thành công")
      }else{
     toast.error("Thất bại")
      }

    }catch(e){
    console.log(e)
    }
    }
    const handlePageClick= (event) => {
        console.log(event)
        getbill(event.selected +1)
  
      }
    return (

        <>
        <div className ="my-3 add-new">
           <span> <b>Hóa đơn</b></span>
        </div>     

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Phòng</th>
              <th>Tháng</th>
              <th>Năm</th>
              <th>Trạng Thái</th>
              <th>Ngày nộp</th>
              <th>Người nộp</th>
              <th>Sô tiền đã nộp</th>
            </tr>
          </thead>
          <tbody>
          {paymentList && paymentList.length > 0 &&
              paymentList.map((item, index) => (
                <tr key={`user-${index}`}>
                  <td>{item.bill_apartmentId}</td>
                  <td>{item.bill_month}</td>
                  <td>{item.bill_year}</td>
                  <td>{item.bill_status}</td>
                  <td>{item.bill_payDay}</td>
                  <td>{item.bill_payerName}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPage}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
       </>
         
    );
    
}
export default TableBill;