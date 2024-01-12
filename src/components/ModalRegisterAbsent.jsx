import { Modal, Button } from 'react-bootstrap';

const ModalRegisterAbsent = (props) => {
    const { show, handleClose, submit, setForm, form, id } = props;
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm tạm vắng</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Lý do</label>
                            <input
                                type="text"
                                className="form-control"
                                value={form.reason}
                                onChange={(event) =>
                                    setForm('reason',event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Tạm vắng từ</label>
                            <input
                                type="date"
                                className="form-control"
                                value={form.startDate}
                                onChange={(event) =>
                                    setForm('startDate',event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Tạm vắng đến</label>
                            <input
                                type="date"
                                className="form-control"
                                value={form.endDate}
                                onChange={(event) =>
                                    setForm('endDate',event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nơi đến</label>
                            <input
                                type="text"
                                className="form-control"
                                value={form.destinationAddress}
                                onChange={(event) =>
                                    setForm('destinationAddress',event.target.value)
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
                            submit(id,form)
                        }
                    >
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalRegisterAbsent;
