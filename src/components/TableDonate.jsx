import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import { useData2 } from '../Context/UseContext';
import { fetchAllUser_2 } from '../service/UserService';
import { Button } from 'react-bootstrap';
import ModalDonate from './ModalDonate';
const TableDonate = () =>{
    const {name,apartmentId} = useData2()
    const [listUsers,setListUsers] = useState([])
    const [totalPage,setTotalPage] = useState(0)
    const [isShowModalDonate,setIsShowModalDonate] = useState(false)
    const [peopleID,setPeopleId] = useState('')
    const handlePageClick= (event) => {
      console.log(event)
      }
      useEffect(() =>{
        //call API
       getUser2(1);
   },[])
    const getUser2 = async (page) =>{
      let res = await fetchAllUser_2(page,name,apartmentId)
      console.log(res)
      setListUsers(res.data.peopleList)
      setTotalPage(res.data.totalPage)
    }

    const handleDonate = (data) =>{ 
      setIsShowModalDonate(true)
      setPeopleId(data)
    }
    const handleClose = () =>{
      setIsShowModalDonate(false)
    }
    
    return (

        <>
        <div className ="my-3 add-new">
           <span> <b>Danh sách cư dân</b></span>
        </div>     

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Họ Tên</th>
              <th>Số Phòng</th>
              <th>Vai Trò</th>
              <th>Trạng Thái</th>
              <th>Tùy Chọn</th>
            </tr>
          </thead>
          <tbody>
          {listUsers && listUsers.length > 0 &&
              listUsers.map((item, index) => (
                <tr key={`user-${index}`}>
                  <td>{item.name}</td>
                  <td>{item.apartmentId}</td>
                  <td>{item.relationWithHouseholder}</td>
                  <td>{item.status}</td>
                  
                  <td 
                  ><Button variant="danger" 
                  onClick={()=>handleDonate(item.id)}
                  >Đóng góp</Button></td>
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
      <ModalDonate
      show = {isShowModalDonate}
      handleClose ={handleClose}
      peopleId={peopleID}
      />

      
      
     </>
         
    );
    
}
export default TableDonate;