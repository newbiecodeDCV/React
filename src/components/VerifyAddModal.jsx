import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function VerifyAddModal(props) {
    const { id, onVerify, onClose, email } = props;
    return (
        <Modal
            show={props.show}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Bạn có chắc chắn muốn thêm?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.children}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={() => {
                        onClose();
                    }}
                >
                    Đóng
                </Button>
                <Button
                    onClick={() => {
                        onVerify(id,email);
                    }}
                >
                    Xác nhận
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
