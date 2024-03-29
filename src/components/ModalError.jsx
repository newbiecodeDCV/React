import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function ErrorModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Đã xảy ra lỗi
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.children}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Quay lại</Button>
            </Modal.Footer>
        </Modal>
    );
}
