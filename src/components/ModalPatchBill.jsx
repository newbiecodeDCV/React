import { useState} from 'react'
import { Modal, Button} from 'react-bootstrap';
import { patchBill} from '../service/UserService';
import { toast } from 'react-toastify';
const ModalPatchBill = (props)  => {
    const { show ,handleClose,getpeedept} = props;
    const [apartmentId,setApartmentId] = useState("");
    const [month,setMonth] =useState("")
    const [year,setYear] =useState("")
    const [payMoney,setPayMoney] =useState("")
    const [payername,setPayername] = useState("")

    const patchBilldv = async ()=>{
        try{
          let res = await patchBill(apartmentId,month,year,payMoney,payername)
          console.log(res)
          console.log(apartmentId,month,year,payMoney,payername)
          if(res && res.status ==='Success'){
            toast.success("Thanh toán thành công")
           handleClose()
           setApartmentId('')
           setMonth('')
           setYear('')
           setPayMoney('')
           setPayername('')
           getpeedept(1)
         }
         }catch(e){
            console.log(e)
          }
        
      }
    
    return(
    <>
        <Modal show = {show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Đóng Tiền</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className='body-add-new'>
            <div className="mb-3">
                <label className="form-label">Số Phòng</label>
                <input 
                type="text" 
                className="form-control" 
                value={apartmentId}
                onChange={(event) =>setApartmentId(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Tháng</label>
                <input 
                type="text" 
                className="form-control" 
                value={month}
                onChange={(event) =>setMonth(event.target.value)}
                />
                </div>
                <div className="mb-3">
                <label className="form-label">Năm</label>
                <input 
                type="text" 
                className="form-control" 
                value={year}
                onChange={(event) =>setYear(event.target.value)}
                />
                </div>
                <div className="mb-3">
                <label className="form-label">Số tiền</label>
                <input 
                type="text" 
                className="form-control" 
                value={payMoney}
                onChange={(event) =>setPayMoney(event.target.value)}
                />
                </div>
                <div className="mb-3">
                <label className="form-label">Người đóng</label>
                <input 
                type="text" 
                className="form-control" 
                value={payername}
                onChange={(event) =>setPayername(event.target.value)}
                />
                </div>
            
        </div>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Đóng
        </Button>
        <Button variant="primary" onClick={
            ()=> patchBilldv()
            }>
        Lưu thay đổi
        </Button>
        </Modal.Footer>
        </Modal>

        </>


    )
    }
    export default ModalPatchBill;