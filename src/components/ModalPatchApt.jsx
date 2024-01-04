import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { pathApartMents } from '../service/UserService';
import { toast } from 'react-toastify';
const ModalPatchApt = (props) => {
    const { show, handle2Close, data, onPatchSuccess } = props;
    const [name, setName] = useState('');
    const [nation, setNation] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [citizenId, setCitizenId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const resetState = () => {
        setName('');
        setNation('');
        setDateOfBirth('');
        setCitizenId('');
        setPhoneNumber('');
        setPermanentAddress('');
    };
    const handleCloseModal = () => {
        handle2Close();
        return resetState();
    }
    const handlePatchApart = async (
        apartmentId,
        name,
        nation,
        dateOfBirth,
        citizenId,
        phoneNumber,
        permanentAddress
    ) => {
        try {
            const res = await pathApartMents(
                apartmentId,
                name,
                nation,
                dateOfBirth,
                citizenId,
                phoneNumber,
                permanentAddress
            );
            if (res.status === 'Success') {
                toast.success('Thay đổi thành công');
                handle2Close();
                onPatchSuccess((prev) => !prev);
            } else toast.error(res.data?.message);
            return resetState();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handle2Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Thay đổi chủ sở hữu</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Tên</label>
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
                            <label className="form-label">Quốc Tịch</label>
                            <input
                                type="text"
                                className="form-control"
                                value={nation}
                                onChange={(event) =>
                                    setNation(event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ngày sinh</label>
                            <input
                                type="date"
                                className="form-control"
                                value={dateOfBirth}
                                onChange={(event) =>
                                    setDateOfBirth(event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Số căn cước công dân
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={citizenId}
                                onChange={(event) =>
                                    setCitizenId(event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Số điện thoại</label>
                            <input
                                type="text"
                                className="form-control"
                                value={phoneNumber}
                                onChange={(event) =>
                                    setPhoneNumber(event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Địa chỉ thường trú
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={permanentAddress}
                                onChange={(event) =>
                                    setPermanentAddress(event.target.value)
                                }
                            />
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Đóng
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() =>
                            handlePatchApart(
                                data.apartmentId,
                                name,
                                nation,
                                dateOfBirth,
                                citizenId,
                                phoneNumber,
                                permanentAddress
                            )
                        }
                    >
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalPatchApt;
