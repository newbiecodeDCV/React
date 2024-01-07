import { useState} from 'react'
import { Modal, Button} from 'react-bootstrap';
import { useData3 } from '../Context/UseContext';

const ModalBillPhong = (props)  => {
    const { show ,handleClose } = props;
    const [apartmentId,setApartmentId] = useState("");
    const [month,setMonth] = useState(new Date().getMonth() + 1)
    const [year,setYear] = useState(new Date().getFullYear())
    const {setAndRedirect} = useData3()

    const handleBillPhong = () =>{
        setAndRedirect(apartmentId,month,year)
    }
    return(
    <>
        <Modal show = {show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Tra cứu bill Phòng</Modal.Title>
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
                <label className='form-label'>Tháng</label>
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
        </div>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Đóng
        </Button>
        <Button variant="primary" 
        onClick={()=>handleBillPhong()}>
        Tra cứu
        </Button>
        </Modal.Footer>
        </Modal>

        </>


    )
    }
    export default ModalBillPhong;