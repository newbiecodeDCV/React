
import Table from 'react-bootstrap/Table';
import { useEffect,useState } from 'react';
import { fetchAllCharity } from '../service/UserService';
import { useData1 } from '../Context/UseContext';
import { Button } from 'react-bootstrap';
import ModalAddCharity from './ModalAddCharity';
import ModalCharity from './ModalCharity';
const TableCharity = () =>{
  const [isShowModalCharity,SetIsShowModalCharity] = useState(false)
   const handleClose2 = () =>{
   SetIsShowModalCharity(false)
  }
  const handleModalCharityClick = () => {
   SetIsShowModalCharity(true);
 };

    const { setData,data,setAndRedirect} = useData1()
    const [isShowModalAdd,setIsShowModalAdd] = useState(false)
    const [data1,setData1] = useState([])
    const handleClose = () =>{
      setIsShowModalAdd(false)
    }
    const handleOpen = (param) => {
      setIsShowModalAdd(true)
      setData(param)
    }
  
    const getCharity = async () =>{
         let res = await fetchAllCharity()
         console.log(res)
         setData1(res.data)
    }
    useEffect(() =>{
        //call API
       getCharity();
   },[])

   const handleButtonClick = (param) => () => {
    const newData = param;
    // Truyền newData cho setAndRedirect
    setAndRedirect(newData);
    console.log(data)
   }

    return (
         
        <>
        <div className ="my-3 add-new">
    
           <span> <b>Danh sách các phí từ thiện</b></span>
           <button className="btn btn-success"
            onClick={handleModalCharityClick}
             >Thêm phí từ thiện</button>
        </div>     

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tên Quỹ</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày kết thúc</th>
              <th>Thay đổi lúc</th>
              <th>Tùy Chọn</th>
            
            </tr>
          </thead>
          <tbody>
                 {data1 && data1.map((item,index) =>(
                <tr>
                  <td>{item.name}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>{item.updatedAt}</td>
                  
                  <td>
                   <Button variant="info mx-3" onClick={handleButtonClick(item.id)}>Chi tiết</Button>
                   <Button variant="success"
                   onClick={ () =>handleOpen(item.id)}
                   >Đóng góp</Button>
                   </td>
                    
                  
                  </tr>
                 ))}
            
          </tbody>
        </Table>
        <ModalAddCharity
        show = {isShowModalAdd}
        handleClose = {handleClose}
        />
         <ModalCharity
           show={isShowModalCharity}
           handleClose = {handleClose2}
           getCharity = {getCharity}
           />
      </>
      )
}
export default TableCharity
