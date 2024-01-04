import { useState} from 'react'
import { Modal, Button} from 'react-bootstrap';
import { postManager } from '../service/UserService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const ModalAddManager = (props)  => {
    const { show ,handleClose,getManager } = props;
    const [mail,setMail] = useState("");
    const [peopleID,setPeopleId] = useState("");
    const [role,setRole] = useState("");
    const handleSaveManager = async (mail,peopleID,role) => {
        try{
        let res = await  postManager(mail,peopleID,role)
        console.log(">>> check res",res)
        console.log(mail,peopleID,role)
        if(res && res.status ==="Success" ){
            toast.success("Thêm thành công")
            handleClose()
            setMail('')
            setPeopleId('')
            setRole('')
            getManager()
                    
        }else{
            toast.error("Lỗi nhập liệu")
        }
        }catch(e){
            toast.error(e)
        }
    }
    const handleCloseModal = () =>{
        handleClose()
        setMail('')
        setPeopleId('')
        setRole('')

        
    }
    return(
    <>
        <Modal show = {show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Thêm Manager</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className='body-add-new'>
            <div className="mb-3">
                <label className="form-label">Mail</label>
                <input 
                type="text" 
                className="form-control" 
                value={mail}
                onChange={(event) =>setMail(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className='form-label'>Id</label>
                <input 
                type="text" 
                className="form-control"
                value={peopleID}
                onChange={(event) =>setPeopleId(event.target.value)}   
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Role</label>
                <input 
                type="text" 
                className="form-control" 
                value={role}
                onChange={(event) =>setRole(event.target.value)}
                />
            </div>
        </div>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
            Đóng
        </Button>
        <Button variant="primary" onClick={() => handleSaveManager(mail,peopleID,role)
        }>
        Lưu thay đổi
        </Button>
        </Modal.Footer>
        </Modal>

        </>


    )
    }
    export default ModalAddManager;