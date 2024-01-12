import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
function ModalPatchPeople(props) {
    const { show,id, handleClose, setField, onVerify,form,newData, setNewData } = props;
    const setForm = (field, value) => {
        setNewData({ ...newData, [field]: value });
        setField(field, value);
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thay đổi thông tin nhân khẩu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                            <Form.Group
                                className="mb-3"
                                md="5"
                                controlId="name"
                            >
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newData.name}
                                    onChange={(e) =>
                                        setForm('name', e.target.value)
                                    }
                                    required
                                    // isInvalid={!!errors.name}
                                />
                                {/* <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                md="4"
                                controlId="citizenId"
                            >
                                <Form.Label>Số căn cước công dân</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newData.citizenId}
                                    required
                                    onChange={(e) =>
                                        setForm('citizenId', e.target.value)
                                    }
                                    // isInvalid={!!errors.citizenId}
                                />
                                {/* <Form.Control.Feedback type="invalid">
                            {errors.citizenId}
                        </Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                md="3"
                                controlId="dateOfBirth"
                            >
                                <Form.Label>Ngày sinh</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={newData.dateOfBirth}
                                    onChange={(e) =>
                                        setForm('dateOfBirth', e.target.value)
                                    }
                                    required
                                    // isInvalid={!!errors.dateOfBirth}
                                />
                                {/* <Form.Control.Feedback type="invalid">
                            {errors.dateOfBirth}
                        </Form.Control.Feedback> */}
                            </Form.Group>
                        {/* <Row>
                    <Form.Group
                        className="mb-3"
                        controlId="gender"
                        as={Col}
                        md="5"
                    >
                        <Form.Label>Giới tính</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Nam"
                            name="gender"
                            value="Nam"
                            onChange={(e) => setForm('gender', e.target.value)}
                            required
                            isInvalid={!!errors.gender}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.gender}
                        </Form.Control.Feedback>
                        <Form.Check
                            type="radio"
                            label="Nữ"
                            name="gender"
                            value="Nữ"
                            onChange={(e) => setForm('gender', e.target.value)}
                            required
                            isInvalid={!!errors.gender}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.gender}
                        </Form.Control.Feedback>
                        <Form.Check
                            type="radio"
                            label="Khác"
                            name="gender"
                            value="Khác"
                            onChange={(e) => setForm('gender', e.target.value)}
                            isInvalid={!!errors.gender}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.gender}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row> */}
                            <Form.Group
                                className="mb-3"
                                md="4"
                                controlId="nation"
                            >
                                <Form.Label>Quốc tịch</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newData.nation}
                                    onChange={(e) =>
                                        setForm('nation', e.target.value)
                                    }
                                    required
                                    // isInvalid={!!errors.nation}
                                />
                                {/* <Form.Control.Feedback type="invalid">
                            {errors.nation}
                        </Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                md="4"
                                controlId="ethnic"
                            >
                                <Form.Label>Dân tộc</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newData.ethnic}
                                    onChange={(e) =>
                                        setForm('ethnic', e.target.value)
                                    }
                                    required
                                    // isInvalid={!!errors.ethnic}
                                />
                                {/* <Form.Control.Feedback type="invalid">
                            {errors.ethnic}
                        </Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                md="4"
                                controlId="religion"
                            >
                                <Form.Label>Tôn giáo</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newData.religion}
                                    onChange={(e) =>
                                        setForm('religion', e.target.value)
                                    }
                                    required
                                    // isInvalid={!!errors.religion}
                                />
                                {/* <Form.Control.Feedback type="invalid">
                            {errors.religion}
                        </Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                md="4"
                                controlId="phoneNumber"
                            >
                                <Form.Label>Số điện thoại (*)</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newData.phoneNumber}
                                    onChange={(e) =>
                                        setForm('phoneNumber', e.target.value)
                                    }
                                    // isInvalid={!!errors.phoneNumber}
                                />
                                {/* <Form.Control.Feedback type="invalid">
                            {errors.phoneNumber}
                        </Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                md="5"
                                controlId="email"
                            >
                                <Form.Label>Email (*)</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={newData.email}
                                    onChange={(e) =>
                                        setForm('email', e.target.value)
                                    }
                                    // isInvalid={!!errors.email}
                                />
                                {/* <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                md="3"
                                controlId="career"
                            >
                                <Form.Label>Nghề nghiệp (*)</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newData.career}
                                    onChange={(e) =>
                                        setForm('career', e.target.value)
                                    }
                                    // isInvalid={!!errors.career}
                                />
                                {/* <Form.Control.Feedback type="invalid">
                            {errors.career}
                        </Form.Control.Feedback> */}
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                md="6"
                                controlId="hometown"
                            >
                                <Form.Label>Quê quán</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newData.hometown}
                                    onChange={(e) =>
                                        setForm('hometown', e.target.value)
                                    }
                                    required
                                    // isInvalid={!!errors.hometown}
                                />
                                {/* <Form.Control.Feedback type="invalid">
                            {errors.hometown}
                        </Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                md="6"
                                controlId="permanentAddress"
                            >
                                <Form.Label>Địa chỉ thường trú</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newData.permanentAddress}
                                    onChange={(e) =>
                                        setForm(
                                            'permanentAddress',
                                            e.target.value
                                        )
                                    }
                                    required
                                    // isInvalid={!!errors.permanentAddress}
                                />
                                {/* <Form.Control.Feedback type="invalid">
                                    {errors.permanentAddress}
                                </Form.Control.Feedback> */}
                            </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>onVerify(id,form)}>
                        Thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPatchPeople;
