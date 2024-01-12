import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalPatchRelation = (props) => {
    const { show, handleClose, submit, id } = props;
    const [newRelation, setNewRelation] = useState(undefined);
    return (
        <>
            <Modal
                show={show}
                onHide={() => {
                    handleClose();
                    setNewRelation(undefined);
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thay đổi mối quan hệ với chủ hộ</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Quan hệ mới</label>
                            <input
                                type="text"
                                className="form-control"
                                value={newRelation}
                                onChange={(event) =>
                                    setNewRelation(event.target.value)
                                }
                            />
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={async () => {
                            const isCompleted = await submit(id, newRelation);
                            if(isCompleted) setNewRelation(undefined);
                        }}
                    >
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalPatchRelation;
