import { useState} from 'react'
import { Modal, Button} from 'react-bootstrap';

const ModalAddNew = (props)  => {
    const { show ,handleClose } = props;
    const [tk,setTk] = useState("");
    const [mk,setMk] = useState("");
    const handleSaveUser = () => {
        console.log(">>> check state: ","name = ",tk,"job = ",mk)

    }
    return(
    <>
        <Modal show = {show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className='body-add-new'>
            <div className="mb-3">
                <label className="form-label">Tài khoản</label>
                <input 
                type="text" 
                className="form-control" 
                value={tk}
                onChange={(event) =>setTk(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className='form-label'>Mật khẩu</label>
                <input 
                type="text" 
                className="form-control"
                value={mk}
                onChange={(event) =>setMk(event.target.value)}   
                />
            </div>
        </div>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Đóng
        </Button>
        <Button variant="primary" onClick={() => handleSaveUser()}>
        Lưu thay đổi
        </Button>
        </Modal.Footer>
        </Modal>

        </>

    )
    }
    export default ModalAddNew;