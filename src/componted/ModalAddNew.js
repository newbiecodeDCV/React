import { useState} from 'react'
import { Modal, Button} from 'react-bootstrap';
import { postApartMents } from '../service/UserService';
import { toast } from 'react-toastify';
const ModalAddNew = (props)  => {
    const { show ,handleClose } = props;
    const [area,setArea] = useState("");
    const [apartmentId,setApartmentId] = useState("");
    const [type,setType] = useState("");
    const handleSaveUser = async (area,apartmentId,type) => {
        try{
        let res = await  postApartMents(area,apartmentId,type)
        console.log(">>> check res",res,area,apartmentId,type)
        console.log(res.data.status)
        if(res && res.data.status == 'Fail'){
            toast.error("Lỗi nhập liệu")
                    
        }else{
            toast.success("Thêm thành công")
        }
        }catch(e){
            toast.error(e)
        }
    }
    return(
    <>
        <Modal show = {show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Thêm căn hộ</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className='body-add-new'>
            <div className="mb-3">
                <label className="form-label">Diện tích</label>
                <input 
                type="text" 
                className="form-control" 
                value={area}
                onChange={(event) =>setArea(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className='form-label'>Id</label>
                <input 
                type="text" 
                className="form-control"
                value={apartmentId}
                onChange={(event) =>setApartmentId(event.target.value)}   
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Loại</label>
                <input 
                type="text" 
                className="form-control" 
                value={type}
                onChange={(event) =>setType(event.target.value)}
                />
            </div>
        </div>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Đóng
        </Button>
        <Button variant="primary" onClick={() => handleSaveUser(area,apartmentId,type)}>
        Lưu thay đổi
        </Button>
        </Modal.Footer>
        </Modal>

        </>


    )
    }
    export default ModalAddNew;