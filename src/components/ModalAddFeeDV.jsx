import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postFeeDV } from '../service/FeeService';
import { toast } from 'react-toastify';
import CurrencyInput from 'react-currency-input-field';
const ModalAddFeeDV = (props) => {
    const { show, handleClose, getPeeDV } = props;
    const [name, setName] = useState(undefined);
    const [price, setPrice] = useState(undefined);
    const [unit, setUnit] = useState(undefined);
    const handleFee = async () => {
        try {
            let res = await postFeeDV(name, price, unit);
            if (res && res.status === 'Success') {
                toast.success('Thêm thành công');
                handleClose();
                setName(undefined);
                setPrice(undefined);
                setUnit(undefined);
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
                    <div className="mb-3">
                        <label className="form-label">Tên Phí</label>
                        <select
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                                if (
                                    event.target.value === 'Phí dịch vụ' ||
                                    event.target.value === 'Phí quản lý'
                                ) {
                                    setUnit('/m2');
                                } else {
                                    setUnit('/tháng');
                                }
                            }}
                            className="form-select"
                            defaultValue={false}
                        >
                            <option value="">--</option>
                            <option value="Phí dịch vụ">Phí dịch vụ</option>
                            <option value="Phí quản lý">Phí quản lý</option>
                            <option value="Phí gửi xe máy">
                                Phí gửi xe máy
                            </option>
                            <option value="Phí gửi ô tô">
                                Phí gửi xe ô tô
                            </option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Giá</label>{' '}
                        <CurrencyInput
                            intlConfig={{ locale: 'vi', currency: 'VND' }}
                            id="input-example"
                            name="input-name"
                            // suffix='đ'
                            onValueChange={(value, name, values) =>
                                setPrice(value)
                            }
                        />{' '}
                        <label className="form-label">Đơn vị</label>{' '}
                        <input
                            intlConfig={{ locale: 'vi', currency: 'VND' }}
                            id="input-example"
                            name="input-name"
                            readOnly
                            value={unit}
                            // suffix='đ'
                        />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            handleClose();
                            setName(undefined);
                            setUnit(undefined);
                            setPrice(undefined);
                        }}
                    >
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
