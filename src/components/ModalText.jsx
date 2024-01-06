import Modal from 'react-bootstrap/Modal';
export default function ModalText(props) {
    const { header, onClose } = props;
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
                    {header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.children}</p>
            </Modal.Body>
        </Modal>
    );
}
