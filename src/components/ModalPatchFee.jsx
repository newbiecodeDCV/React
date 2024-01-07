import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { patchFee } from '../service/FeeService';
import { toast } from 'react-toastify';
import CurrencyInput from 'react-currency-input-field';
const ModalPatchPee = (props) => {
    const { show, handleClose, id, getPeeDV } = props;
    const [unitPrice, setUnitPrice] = useState('');

    const patchFeedv = async () => {
        try {
            let res = await patchFee(id, unitPrice);
            console.log(res);
            if (res && res.status === 'Success') {
                toast.success('Thay đổi thành công');
                setUnitPrice('');
                handleClose();
                getPeeDV();
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thay đổi phí dịch vụ</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Giá thay đổi</label>
                            <br></br>
                            <CurrencyInput
                                intlConfig={{ locale: 'vi', currency: 'VND' }}
                                id="input-example"
                                name="input-name"
                                // suffix='đ'
                                onValueChange={(value, name, values) =>
                                    setUnitPrice(value)
                                }
                            />
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => patchFeedv()}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalPatchPee;
