import React, { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const ModalForm = (props) => {
  const {show,handleClose} = props
  const [id, setId] = useState('');
  const navigate = useNavigate();
  const handleSaveChanges = () => {
    navigate(`/peePage/page1/func4/${id}`);
    handleClose();
     };

  return (
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
                value={id}
                onChange={(event) =>setId(event.target.value)}
                />
            </div>  
            </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Lưu và Chuyển đến trang
        </Button>
      </Modal.Footer>
      
    </Modal>
  );
};

export default ModalForm;
