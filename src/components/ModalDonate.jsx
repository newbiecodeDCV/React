import { useState} from 'react'
import { Modal, Button} from 'react-bootstrap';
import { postCharityPee } from '../service/UserService';
import { toast } from 'react-toastify';
import { useData1 } from '../Context/UseContext';
const ModalDonate = (props)  => {
    const { show ,handleClose,peopleId} = props;
    const [amount,setAmount] = useState('');
    const {data} = useData1()
    const handleSaveDonate = async (amount) => {
        try{
        let res = await  postCharityPee(data,peopleId,amount)
        console.log(" check res",res)
        console.log(data,peopleId,amount)
        if(res && res.status === 'Success' ){
            toast.success("Thêm thành công")
            handleClose()
            setAmount('')
                    
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
                <label className="form-label">Số tiền</label>
                <input 
                type="text" 
                className="form-control" 
                value={amount}
                onChange={(event) =>setAmount(event.target.value)}
                />
            </div>
            
        </div>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Đóng
        </Button>
        <Button variant="primary" onClick={() => handleSaveDonate(amount)
        }>
        Lưu thay đổi
        </Button>
        </Modal.Footer>
        </Modal>

        </>


    )
    }
    export default ModalDonate;