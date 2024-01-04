import { useState} from 'react'
import { Modal, Button} from 'react-bootstrap';
import { postCharity } from '../service/UserService';
import { toast } from 'react-toastify';
const ModalCharity = (props)  => {
    const { show ,handleClose,getCharity} = props;
    const [name,setName] = useState("");
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const handleSaveCharity = async (name,startDate,endDate) => {
        try{
        let res = await  postCharity(name,startDate,endDate)
        console.log(">>> check res",res,name,startDate,endDate)
        console.log(res)
        if(res && res.data.status === 'Fail'){
            toast.error("Lỗi nhập liệu")
                    
        }else{
            toast.success("Thêm thành công")
            setName('')
            setEndDate('')
            setStartDate('')
            handleClose()
            getCharity()
        }
        }catch(e){
            toast.error(e)
        }
    }
    return(
    <>
        <Modal show = {show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Thêm phí từ thiện</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className='body-add-new'>
            <div className="mb-3">
                <label className="form-label">Tên Phí Từ Thiện</label>
                <input 
                type="text" 
                className="form-control" 
                value={name}
                onChange={(event) =>setName(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className='form-label'>Ngày Bắt Đầu</label>
                <input 
                type="text" 
                className="form-control"
                value={startDate}
                onChange={(event) =>setStartDate(event.target.value)}   
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Ngày Kết Thúc</label>
                <input 
                type="text" 
                className="form-control" 
                value={endDate}
                onChange={(event) =>setEndDate(event.target.value)}
                />
            </div>
        </div>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Đóng
        </Button>
        <Button variant="primary" onClick={() => handleSaveCharity(name,startDate,endDate)}>
        Lưu thay đổi
        </Button>
        </Modal.Footer>
        </Modal>

        </>


    )
    }
    export default ModalCharity;