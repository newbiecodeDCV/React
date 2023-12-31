import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function SuccessModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Thành công
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={props.onHide}>Quay lại</Button>
            </Modal.Footer>
        </Modal>
    );
}
