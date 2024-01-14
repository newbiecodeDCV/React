import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CurrencyInput from 'react-currency-input-field';
const ModalPatchSingleBill = (props) => {
    const { show, handleClose, handleSubmit, id } = props;
    const [payMoney, setPayMoney] = useState('');
    const [payerName, setPayerName] = useState('');

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
                            <br></br>
                            <CurrencyInput
                                intlConfig={{ locale: 'vi', currency: 'VND' }}
                                id="input-example"
                                name="input-name"
                                // suffix='đ'
                                onValueChange={(value, name, values) =>
                                    setPayMoney(value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Họ tên người đóng
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={payerName}
                                onChange={(event) =>
                                    setPayerName(event.target.value)
                                }
                            />
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            handleClose();
                            setPayMoney(undefined);
                            setPayerName(undefined);
                        }}
                    >
                        Đóng
                    </Button>
                    <Button
                        variant="primary"
                        onClick={async () => {
                            const result = await handleSubmit(
                                id,
                                payMoney,
                                payerName
                            );
                            if (result === true) {
                                handleClose();
                                setPayMoney(undefined);
                                setPayerName(undefined);
                            }
                        }}
                    >
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalPatchSingleBill;
