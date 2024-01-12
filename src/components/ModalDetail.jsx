import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDetail(props) {
    const { show, handle2Close, data } = props;

    return (
        <>
            <Modal show={show} onHide={handle2Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin chi tiết</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Mã số: {data.id}</p>
                    <p>Họ tên: {data.name}</p>
                    <p>Ngày sinh: {data.dateOfBirth}</p>
                    <p>Quốc tịch: {data.nation}</p>
                    <p>Giới tính: {data.gender}</p>
                    <p>Dân tộc: {data.ethnic}</p>
                    <p>Tôn giáo: {data.religion}</p>
                    <p>Quê quán: {data.hometown}</p>
                    <p>Địa chỉ thường trú: {data.permanentAddress}</p>
                    <p>Số căn cước: {data.citizenId}</p>
                    <p>Nghề nghiệp: {data.career}</p>
                    <p>Số hiệu căn hộ: {data.apartmentId}</p>
                    <p>Email: {data.email}</p>
                    <p>Số điện thoại: {data.phoneNumber}</p>
                    <p>Trạng thái: { data.status}</p>
                    <p>Quan hệ với chủ hộ: {data.relationWithHouseholder}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handle2Close}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDetail;

