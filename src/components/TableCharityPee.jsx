import { Table } from "react-bootstrap"
import ReactPaginate from 'react-paginate';
import { getCharityPee } from "../service/UserService"; 
import { useData1} from "../Context/UseContext";
import { useEffect, useState } from 'react';
const TableCharityPee = () => {
    const {data,setAndRedirect} = useData1()
    const [totalPage,setTotalPage] = useState(0)
    const handlePageClick = (event) =>{
        getCP(event.selected +1)

    }
    useEffect(() =>{
        //call API
       getCP(1);
   },[])

    const getCP = async (page) => {
        let res = await getCharityPee(page,data)
        console.log(res)
        console.log(data)
        setTotalPage(res.data.totalPage)
    }
    return (
        
        <>
        <div className ="my-3 add-new">
           <span> <b>Thống kê</b></span>
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
                <tr>
                  <td>item.name</td>
                  <td>item.apartmentId</td>
                  <td>item.relationWithHouseholder</td>
                  <td>item.status</td>  
                </tr>
             
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
    )
}
export default TableCharityPee