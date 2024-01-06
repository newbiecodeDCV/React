import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postFeeDV } from '../service/FeeService';
import { toast } from 'react-toastify';
const ModalAddFeeDV = (props) => {
    const { show, handleClose, getPeeDV } = props;
    const [name, setName] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const handleFee = async () => {
        try {
            let res = await postFeeDV(name, unitPrice);
            console.log(' check res', res);
            if (res && res.status === 'Success') {
                toast.success('Thêm thành công');
                handleClose();
                setName('');
                setUnitPrice('');
                getPeeDV();
            }
        } catch (e) {
            console.log('🚀 ~ handleFee ~ e:', e);
        }
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm phí</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Tên Phí</label>
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
                            <label className="form-label">Đơn vị giá</label>
                            <input
                                type="text"
                                className="form-control"
                                value={unitPrice}
                                onChange={(event) =>
                                    setUnitPrice(event.target.value)
                                }
                            />
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => handleFee()}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalAddFeeDV;
