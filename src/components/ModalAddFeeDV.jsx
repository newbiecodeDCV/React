import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postFeeDV } from '../service/FeeService';
import { toast } from 'react-toastify';
import CurrencyInput from 'react-currency-input-field';
const ModalAddFeeDV = (props) => {
    const { show, handleClose, getPeeDV } = props;
    const [name, setName] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [unitPee,setUnitPee] = useState('')
    const handleFee = async () => {
        try {
            let res = await postFeeDV(name, unitPrice,unitPee);
            console.log(' check res', res);
            console.log(unitPee)
            if (res && res.status === 'Success') {
                toast.success('Thêm thành công');
                handleClose();
                setName('');
                setUnitPrice('');
                setUnitPee('');
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
                            setName(event.target.value)
                            if (event.target.value === 'Phí dịch vụ' || event.target.value ==='Phí quản lý') {
                                 setUnitPee('/m2');
                            } else {
               
                            setUnitPee('/tháng');
                           }}
                    
                          }
                           className="form-select"
                    >
                     <option value="Phí dịch vụ">Phí dịch vụ</option>
                     <option value="Phí quản lý">Phí quản lý</option>
                     <option value="Phí gửi xe máy">Phí gửi xe máy</option>
                     <option value="Phí gửi ô tô">Phí gửi xe ô tô</option>
                   </select>
</div>

                        <div className="mb-3">
                            <label className="form-label">Đơn vị giá</label>
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
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            handleClose();
                            setName(undefined);
                            setUnitPrice(undefined);
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
