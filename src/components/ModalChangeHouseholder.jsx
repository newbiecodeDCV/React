import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
const ModalChangeHouseholder = (props) => {
    const { show, handleClose, submit, apartmentId,data } = props;
    const [form, setForm] = useState({});
    const setField = (field,value)=>{setForm({...form,[field]:value})}
    const [selectedRowIndex,setSelectedRowIndex] = useState(-1);
    return (
        <>
            <Modal
                show={show}
                onHide={() => {
                    handleClose();
                    setSelectedRowIndex(-1)
                    setForm({});
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thay đổi chủ hộ</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Họ Tên</th>
                        <th>Số căn cước</th>
                        <th>Chủ hộ mới?</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length> 0 && data.filter((people)=>people.relationWithHouseholder !== 'Chủ hộ').map((people,index)=>(
                            <tr key={index} style= {selectedRowIndex===index ? { backgroundColor: 'green' }
                            : { backgroundColor: 'yellow' }}>
                                <td style= {selectedRowIndex===index ? { backgroundColor: 'yellow' }
                            : { }}>{people.name}</td>
                                <td>{people.citizenId}</td>
                                <td>
                                    <Button
                                        variant="info"
                                        onClick={() =>
                                            {
                                                setSelectedRowIndex(index);
                                                setField('newHouseholderId',people.id)
                                            }
                                        }
                                    >
                                        Chọn
                                    </Button>
                                </td>
                            </tr>))}
                    
                    </tbody>
                    </Table>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Quan hệ của chủ hộ cũ và chủ hộ mới</label>
                            <input
                                type="text"
                                className="form-control"
                                value={form.newRelation}
                                onChange={(event) =>
                                    setField('newRelation',event.target.value)
                                }
                            />
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={async () => {
                            const isCompleted = await submit(apartmentId, form);
                            if(isCompleted) {
                                setSelectedRowIndex(-1);
                                setForm({});
                            }
                        }}
                    >
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalChangeHouseholder;
