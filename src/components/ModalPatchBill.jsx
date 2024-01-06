import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { patchBill } from '../service/FeeService';
import { toast } from 'react-toastify';
import { useData3 } from '../Context/UseContext';
const ModalPatchBill = (props) => {
    const { apartmentId, month, year } = useData3();
    const { show, handleClose, getFeebill } = props;
    const [payMoney, setPayMoney] = useState('');
    const [payername, setPayername] = useState('');

    const patchBilldv = async () => {
        try {
            let res = await patchBill(
                apartmentId,
                month,
                year,
                payMoney,
                payername
            );
            console.log(res);
            if (res && res.status === 'Success') {
                toast.success('Thanh toán thành công');
                handleClose();
                getFeebill();
                setPayMoney('');
                setPayername('');
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Đóng Tiền</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Số tiền</label>
                            <input
                                type="text"
                                className="form-control"
                                value={payMoney}
                                onChange={(event) =>
                                    setPayMoney(event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Người đóng</label>
                            <input
                                type="text"
                                className="form-control"
                                value={payername}
                                onChange={(event) =>
                                    setPayername(event.target.value)
                                }
                            />
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => patchBilldv()}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalPatchBill;
