import { useState} from 'react'
import { Modal, Button} from 'react-bootstrap';
import { postPeeDV } from '../service/UserService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const ModalAddPeeDV = (props)  => {
    const { show ,handleClose,getPeeDV} = props;
    const [name,setName] = useState('')
    const [unitPrice,setUnitPrice] = useState('')
    const Navigate = useNavigate()
    const handlePee = async () => {
        try{
        let res = await  postPeeDV(name,unitPrice)
        console.log(" check res",res)
        if(res && res.status === 'Success' ){
            toast.success("Thêm thành công")
            handleClose()
            getPeeDV()
        }else{
            toast.error("Lỗi nhập liệu")
        }
        }catch(e){
            toast.error(e)
        }
    }
    return(
    <>
        <Modal show = {show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Ủng hộ</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className='body-add-new'>
            <div className="mb-3">
                <label className="form-label">Tên Phí</label>
                <input 
                type="text" 
                className="form-control" 
                value={name}
                onChange={(event) =>setName(event.target.value)}
                />
            </div>
        <div className="mb-3">
                <label className="form-label">Đơn vị giá</label>
                <input 
                type="text" 
                className="form-control" 
                value={unitPrice}
                onChange={(event) =>setUnitPrice(event.target.value)}
                />
            </div>
            
        </div>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Đóng
        </Button>
        <Button variant="primary" onClick={() => handlePee()
        }>
        Lưu thay đổi
        </Button>
        </Modal.Footer>
        </Modal>

        </>


    )
    }
    export default ModalAddPeeDV;