import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postVehicle } from '../service/PeopleService';
import { toast } from 'react-toastify';
const ModalPostVehicle = (props) => {
    const { show, handleClose, ownerId, setIsReload } = props;
    const [numberPlate, setNumberPlate] = useState('');
    const [type, setType] = useState('');
    const handleVehicle = async () => {
        console.log(ownerId);
        try {
            let res = await postVehicle(numberPlate, ownerId, type);
            if (res && res.status === 'Success') {
                toast.success('Đăng ký thành công');
                setNumberPlate('');
                setType('');
                setIsReload((prev) => !prev);
                handleClose()
            }
        } catch (e) {}
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng ký gửi xe</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Biển số xe</label>
                            <input
                                type="text"
                                className="form-control"
                                value={numberPlate}
                                onChange={(event) =>
                                    setNumberPlate(event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Loại xe</label>
                        <select
                            value={type}
                            onChange={(event) => {
                                setType(event.target.value);
                            }}
                            className="form-select"
                            defaultValue={false}
                        >
                            <option value="">--</option>
                            <option value="Xe máy">Xe máy</option>
                            <option value="Ô tô">Ô tô</option>
                        </select>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => handleVehicle()}>
                        Đăng ký
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalPostVehicle;
