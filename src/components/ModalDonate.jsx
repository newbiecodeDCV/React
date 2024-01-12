import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postCharityFee } from '../service/CharityService';
import { toast } from 'react-toastify';
import { useData1 } from '../Context/UseContext';
import CurrencyInput from 'react-currency-input-field';
const ModalDonate = (props) => {
    const { show, handleClose, peopleId, feeId } = props;
    const [amount, setAmount] = useState('');
    const handleSaveDonate = async (amount) => {
        try {
            let res = await postCharityFee(feeId, peopleId, amount);
            console.log(' check res', res);
            if (res && res.status === 'Success') {
                toast.success('Thêm thành công');
                handleClose();
                setAmount('');
            }
        } catch (e) {
            console.log('🚀 ~ handleSaveDonate ~ e:', e);
        }
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ủng hộ</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Số tiền</label>
                            <br></br>
                            <CurrencyInput
                                intlConfig={{ locale: 'vi', currency: 'VND' }}
                                id="input-example"
                                name="input-name"
                                // suffix='đ'
                                onValueChange={(value, name, values) =>
                                    setAmount(value)
                                }
                            />
                            {/* <input
                                type="text"
                                className="form-control"
                                value={amount}
                                onChange={(event) =>
                                    setAmount(event.target.value)
                                }
                            /> */}
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            handleClose();
                            setAmount(undefined);
                        }}
                    >
                        Đóng
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleSaveDonate(amount)}
                    >
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalDonate;
