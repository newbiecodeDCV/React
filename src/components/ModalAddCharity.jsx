import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useData2 } from '../Context/UseContext';
import { useNavigate } from 'react-router-dom';
const ModalAddCharity = (props) => {
    const { show, handleClose,feeId } = props;
    const [name, setName] = useState('');
    const [apartmentId, setApartmentId] = useState('');
    const navigate = useNavigate();
    const handleShow = () => {
        navigate(
            `/feePage/charity/addDonate/${feeId}?name=${name}&apartmentId=${apartmentId}`
        );
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Người đóng góp</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Số hiệu căn hộ</label>
                            <input
                                type="text"
                                className="form-control"
                                value={apartmentId}
                                onChange={(event) =>
                                    setApartmentId(event.target.value)
                                }
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
    );
};
export default ModalAddCharity;
