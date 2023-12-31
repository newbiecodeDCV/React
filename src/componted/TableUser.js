
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../service/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import Button from 'react-bootstrap/Button';
import ModalDetail from './ModalDetail'
const TableUser = (props) =>{
    

    const [listUsers,setListUsers] = useState([]);
    const [totalUsers,setToatalUsers] = useState(0);
    const [totalPage,setTotalPage] = useState(0);
    const [isShowModaAddNew,setIsShowModaAddNew] = useState(false);
    const [isShowModalDetail,setIsShowModalDetail] =useState(false)
    const [data,setData] = useState([])
    const handleClose = () => {
      setIsShowModaAddNew(false);
    }

    const handle2Close = () =>{
      setIsShowModalDetail(false);
    }

    useEffect(() =>{
         //call API
        getUser(1);
    },[])

    const getUser = async (page) => {

        let res = await fetchAllUser(page);
        if( res && res.data ){
          console.log(res)
          setListUsers(res.data.peopleList)
          setToatalUsers(res.data.totalRecord)
          setTotalPage(res.data.totalPage)
          console.log(listUsers)
  
        }
       
    }
    const handlePageClick= (event) => {
      console.log(event)
      getUser(event.selected +1)

    }
    const handleCT = (data) => {
     setIsShowModalDetail(true)
     console.log(data)
     setData(data)

    }
    
    return (

        <>
        <div className ="my-3 add-new">
           <span> <b>Danh sách cư dân</b></span>
           <button className="btn btn-success"
             onClick={() => setIsShowModaAddNew(true)}
             >Thêm cư dân</button>
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
                  ><Button variant="info" 
                  onClick={() => handleCT(item)}
                  >Chi tiết</Button></td>
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
      <ModalAddNew
           show={isShowModaAddNew}
           handleClose = {handleClose}
           />
      <ModalDetail
         show={isShowModalDetail}
         handle2Close = {handle2Close}
         data = {data}
      />
     </>
         
    );
    
}
export default TableUser;