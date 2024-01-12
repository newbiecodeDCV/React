import { useState } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';
import { postApartMents } from '../service/ApartmentService';
import { toast } from 'react-toastify';
const ModalAddNewApartment = (props) => {
    const { show, handleClose, onPostSuccess } = props;
    const [area, setArea] = useState(undefined);
    const [apartmentId, setApartmentId] = useState(undefined);
    const [type, setType] = useState(undefined);
    const resetState = () => {
        setArea('');
        setApartmentId('');
        setType('');
    };
    const handleSaveApartment = async (area, apartmentId, type) => {
        try {
            await postApartMents(area, apartmentId, type);
            toast.success('Thêm thành công');
            onPostSuccess((prev) => !prev);
            handleClose();
            return resetState();
        } catch (e) {
            console.log('🚀 ~ handleSaveApartment ~ e:', e);
        }
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm căn hộ</Modal.Title>
                    {/* <button type="button" class="btn-close" aria-label="Close"></button> */}
                </Modal.Header>

                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Số hiệu căn hộ</label>
                            <input
                                type="text"
                                className="form-control"
                                value={apartmentId}
                                onChange={(event) =>
                                    setApartmentId(event.target.value)
                                }
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Loại</label>
                            <br></br>
                            <input
                                type="radio"
                                name="type"
                                id="normal"
                                value="Thường"
                                onChange={(event) =>
                                    setType(event.target.value)
                                }
                            />
                            <label for="normal">Thường</label>
                            <br></br>
                            <input
                                type="radio"
                                name="type"
                                id="penthouse"
                                value="Penthouse"
                                onChange={(event) =>
                                    setType(event.target.value)
                                }
                            />
                            <label for="penthouse">Penthouse</label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Diện tích</label>
                            <input
                                type="text"
                                className="form-control"
                                value={area}
                                onChange={(event) =>
                                    setArea(event.target.value)
                                }
                            />
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() =>
                            handleSaveApartment(area, apartmentId, type)
                        }
                    >
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalAddNewApartment;
