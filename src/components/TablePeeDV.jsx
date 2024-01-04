import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getPee } from '../service/UserService';
import Button from 'react-bootstrap/Button';
import { deletePee } from '../service/UserService';
import { toast } from 'react-toastify';
import ModalPatchPee from './ModalPatchPee';
const TablePeeDV = (props) =>{

    const [listPee,setListPee] = useState([]);
    const [isModalPatchPeeDV,setIsModalPatchPee] = useState(false)
    const [id,setId] =useState('')
    useEffect(() =>{
         //call API
        getPeeDV();
    },[])

    const getPeeDV = async () => {
       try{
        let res = await getPee();
        if( res && res.data ){
          console.log(res)
          setListPee(res.data)
       }
      }catch(e){
        console.log(e)
       }
      }

    const deletePeeDV =async (id) =>{
      try{
        let res = await deletePee(id)
        if(res && res.status === 'Success' ){
          toast.success("Xóa thành công")
          getPeeDV()
        }
      }catch(e){
        console.log(e)
      }
    }
    const handlePatchPeeDV = (id) =>{
      setId(id)
      setIsModalPatchPee(true)
      
    }
    const handleClose =()=>{
      setIsModalPatchPee(false)
    }
    return (

        <>
        <div className ="my-3 add-new">
           <span> <b>Danh sách phí dịch vụ</b></span>
        </div>     
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tên Phí</th>
              <th>Gía</th>
              <th>Tạo ngày</th>
              <th>Cập nhập lúc</th>
              <th>Tùy Chọn</th>
            </tr>
          </thead>
          <tbody>
          {listPee && listPee.length > 0 &&
              listPee.map((item, index) => (
                <tr key={`user-${index}`}>
                  <td>{item.name}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.updatedAt}</td>
                  <td>
                  <Button variant="danger mx-3"
                  onClick={() =>deletePeeDV(item.id)}
                  >Xóa</Button>
                   <Button variant="warning"
                   onClick={()=>handlePatchPeeDV(item.id)}
                   >Sửa</Button>
                  </td>
                  </tr>
              ))}
          </tbody>
        </Table>
        <ModalPatchPee
        show={isModalPatchPeeDV}
        handleClose={handleClose}
        id= {id}
        />
     </>
         
    );
    
}

export default TablePeeDV;