import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getPeeDept  } from '../service/UserService';
import ReactPaginate from 'react-paginate';
import { Button } from 'react-bootstrap';
import ModalPatchBill from './ModalPatchBill';
import { useNavigate } from 'react-router-dom';
const TablePeeDept = (props) =>{
const navigate = useNavigate()
const [listPeeDept,setListPeeDept] = useState([]);
const [totalPage,setTotalPage] = useState(0);
const [isShowModalPatchBill,setIsShowModalPatchBill] = useState(false)

    useEffect(() =>{
         //call API
        getpeedept(1);
    },[])

    const getpeedept = async (page) => {

        let res = await getPeeDept(page);
        if( res && res.status === 'Success'){
          console.log(res)
          setListPeeDept(res.data.deptList)
          setTotalPage(res.data.totalPage)
         }   
    }
    const handlePageClick= (event) => {
      console.log(event)
      getpeedept(event.selected +1)

    }  
    const handleClose3 = () =>{
      setIsShowModalPatchBill(false)
    }
    const handleOpen3 = () =>{
      setIsShowModalPatchBill(true)
    }
    return (
        <>
        <div className ="my-3 add-new">
           <span> <b>Danh sách Bill nợ</b></span>
        </div>     

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Số hiệu căn hộ</th>
              <th>Tháng</th>
              <th>Năm</th>
              <th>Tổng nợ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {listPeeDept && listPeeDept.length >0 &&
            listPeeDept.map((item, index) => (
                <tr key={`user-${index}`}>
                  <td>{item.bill_apartmentId}</td>
                  <td>{item.bill_month}</td>
                  <td>{item.bill_year}</td>
                  <td>{item.total}</td>
                  <td>
                    <Button  variant="success"
                    onClick={handleOpen3}
                    >
                      Đóng phí
                    </Button>
                  </td>
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
       <div className ="my-3 add-new">
           <span> <Button  variant="success"
           onClick={()=>navigate('/peePage/page2')}
           >Quay lại</Button></span>
        </div> 
      <ModalPatchBill
    show = {isShowModalPatchBill}
    handleClose = {handleClose3}
    getpeedept ={getpeedept}
    />
     
     </>
         
    );
    
}
export default TablePeeDept;