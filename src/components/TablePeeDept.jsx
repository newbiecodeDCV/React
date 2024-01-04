import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getPeeDept  } from '../service/UserService';
import ReactPaginate from 'react-paginate';
const TablePeeDept = (props) =>{
    
const [listPeeDept,setListPeeDept] = useState([]);
const [totalPage,setTotalPage] = useState(0);


    useEffect(() =>{
         //call API
        getpeedept(1);
    },[])

    const getpeedept = async (page) => {

        let res = await getPeeDept(page);
        if( res && res.status === 'Success'){
          console.log(res)
          setListPeeDept(res.data.deptList)
          setTotalPage(res.totalPage)
         }   
    }
    const handlePageClick= (event) => {
      console.log(event)
      getpeedept(event.selected +1)

    }  
    return (
        <>
        <div className ="my-3 add-new">
           <span> <b>Danh sách Bill nợ</b></span>
        </div>     

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Số Phòng</th>
              <th>Tháng</th>
              <th>Năm</th>
              <th>Tổng nợ</th>
            </tr>
          </thead>
          <tbody>
          {listPeeDept && listPeeDept >0 &&
            listPeeDept.map((item, index) => (
                <tr key={`user-${index}`}>
                  <td>{item.bill_apartmentId}</td>
                  <td>{item.bill_month}</td>
                  <td>{item.bill_year}</td>
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
export default TablePeeDept;