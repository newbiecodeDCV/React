import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function VerifyModal(props) {
    const { idToDelete, onVerify, onClose } = props;
    return (
        <Modal
            show={props.show}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={onClose}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Bạn có chắc chắn muốn xóa?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.children}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={() => {
                        onVerify(idToDelete);
                    }}
                >
                    Xác nhận
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
