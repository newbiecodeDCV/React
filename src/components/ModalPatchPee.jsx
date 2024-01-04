import { useState} from 'react'
import { Modal, Button} from 'react-bootstrap';
import { patchPee} from '../service/UserService';
import { toast } from 'react-toastify';
const ModalPatchPee = (props)  => {
    const { show ,handleClose,id} = props;
    const [unitPrice,setUnitPrice] = useState("");

    const patchPeedv = async ()=>{
        try{
          let res = await patchPee(id,unitPrice)
          console.log(res)
          console.log(id)
          if(res && res.status ==='Success'){
            toast.success("Thay đổi thành công")
           handleClose()
         }
         }catch(e){
            console.log(e)
          }
        
      }
    
    return(
    <>
        <Modal show = {show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Thay đổi phí dịch vụ</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className='body-add-new'>
            <div className="mb-3">
                <label className="form-label">Gía thay đổi</label>
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
        <Button variant="primary" onClick={
            () => patchPeedv()
            }>
        Lưu thay đổi
        </Button>
        </Modal.Footer>
        </Modal>

        </>


    )
    }
    export default ModalPatchPee;