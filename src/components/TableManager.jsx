import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { fetchAllManager } from '../service/UserService';
import ModalAddManager from './ModalPostManager';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ModalDelete from './ModalDelete';
const TableManager=  () => {
  const navigate = useNavigate();
    const [listManager,setListManager] = useState([])
    const [isShowModalManager,setIsShowModalManager] = useState(false)
    const [isShowModalDelete,setIsShowModalDelete] = useState(false)
     const [id,setID ] =useState('')
    const handleClose =() =>{
        setIsShowModalManager(false)
    }
    const handleClose2 =() =>{
      setIsShowModalDelete(false)
  }
  const handledelete =(id)=>{
    setIsShowModalDelete(true)
   setID(id)
  }
    useEffect(() =>{
        //call API
        getManager();
    }, []);

    const getManager = async () => {
        try {
            let res = await fetchAllManager();
            setListManager(res.data);
            console.log('Check', res);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className="my-3 add-new">
                <span>
                    {' '}
                    <b>Danh sách ban quản trị</b>
                </span>
                <button
                    className="btn btn-success"
                    onClick={() => navigate('/admin/addAdmin')}
                >
                    Thêm quản trị
                </button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Họ Tên</th>
                        <th>Số Phòng</th>
                        <th>Email tài khoản</th>
                        <th>Số điện thoại</th>
                    </tr>
                </thead>
                <tbody>
                    {listManager &&
                        listManager.length > 0 &&
                        listManager.map((item, index) => (
                            <tr key={`manager-${index}`}>
                                <td>{item.people?.name}</td>
                                <td>{item.people?.apartmentId}</td>
                                <td>{item.email}</td>
                                <td>{item.people?.phoneNumber}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Họ Tên</th>
              <th>Số Phòng</th>
              <th>Email tài khoản</th>
              <th>Số điện thoại</th>
              <th> Tùy Chọn</th>
            </tr>
          </thead>
          <tbody>
            {listManager && listManager.length > 0 &&
              listManager.map((item, index) => (
                <tr key={`manager-${index}`}>
                  <td>{item.people.name}</td>
                  <td>{item.people.apartmentId}</td>
                  <td>{item.email}</td>
                  <td>{item.people.phoneNumber}</td>
                  <td>
                    <Button variant="primary" 
                    onClick={()=>handledelete(item.id)
                    }
                    >Xóa</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        
    
      <ModalAddManager
           show={isShowModalManager}
           handleClose = {handleClose}
           getManager ={getManager}
           />
           <ModalDelete
           show={isShowModalDelete}
           handleClose = {handleClose2}
           id ={id}
           getManager={getManager}
           />
           </>
    )
              }
export default TableManager
