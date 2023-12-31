import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { fetchAllManager} from '../service/UserService';
import ModalAddManager from './ModalPostManager';

const TableManager=  () => {
    const [listManager,setListManager] = useState([])
    const [isShowModalManager,setIsShowModalManager] = useState(false)
    
    const handleClose =() =>{
        setIsShowModalManager(false)
    }
    useEffect(() =>{
        //call API
       getManager();
   },[])

    const getManager = async () =>{
     try{
     let res = await fetchAllManager()
     setListManager(res.data)
     console.log("Check",res)
     }catch(e){
        console.log(e)
     }

    }

    return (
        <>
        <div className ="my-3 add-new">
           <span> <b>Danh sách quản trị</b></span>
           <button className="btn btn-success"
            onClick={() => setIsShowModalManager(true)}

             >Thêm quản trị</button>
        </div>     

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Họ Tên</th>
              <th>Số Phòng</th>
              <th>Quan hệ với chủ nhà</th>
              <th>Trạng Thái</th>
            </tr>
          </thead>
          <tbody>
            {listManager && listManager.length > 0 &&
              listManager.map((item, index) => (
                <tr key={`manager-${index}`}>
                  <td>{item.people.name}</td>
                  <td>{item.people.apartmentId}</td>
                  <td>{item.people.relationWithHouseholder}</td>
                  <td>{item.people.status}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        
    
      <ModalAddManager
           show={isShowModalManager}
           handleClose = {handleClose}
           />
           </>
    )
              }
export default TableManager