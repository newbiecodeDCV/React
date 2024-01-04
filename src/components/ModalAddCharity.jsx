import { useState} from 'react'
import { Modal, Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useData2 } from "../Context/UseContext";
const ModalAddCharity = (props)  => {
    const { show ,handleClose } = props;
    const [name,setName] = useState("");
    const [apartmentId,setApartmentId] = useState("");
    const {setAndRedirect} = useData2()
    const handleShow =  () => {
        setAndRedirect(name,apartmentId)
        console.log("Truyền thành công")
        setName("")
        setApartmentId("")
    }
    return(
    <>
        <Modal show = {show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Người đóng góp</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className='body-add-new'>
            <div className="mb-3">
                <label className="form-label">Tên</label>
                <input 
                type="text" 
                className="form-control" 
                value={name}
                onChange={(event) =>setName(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className='form-label'>Số hiệu căn hộ</label>
                <input 
                type="text" 
                className="form-control"
                value={apartmentId}
                onChange={(event) =>setApartmentId(event.target.value)}   
                />
            </div>
           </div>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Đóng
        </Button>
        <Button variant="primary" onClick={() => handleShow()}>
        Tiếp tục
        </Button>
        </Modal.Footer>
        </Modal>

        </>


    )
    }
    export default ModalAddCharity;