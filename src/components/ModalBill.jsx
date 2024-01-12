import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useData4 } from '../Context/UseContext';
import { useNavigate } from 'react-router-dom';
const ModalBill = (props) => {
    const { show, handleClose } = props;
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
    const navigate = useNavigate();
    const handleBill = () => {
        navigate(
            `/feePage/fee/listBill?month=${month}&year=${year}`
        );
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tra Cứu</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Tháng</label>
                            <input
                                type="text"
                                className="form-control"
                                value={month}
                                onChange={(event) =>
                                    setMonth(event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Năm</label>
                            <input
                                type="text"
                                className="form-control"
                                value={year}
                                onChange={(event) =>
                                    setYear(event.target.value)
                                }
                            />
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => handleBill()}>
                        Tra cứu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalBill;
