import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function OtherInfoForm({ setField, errors }) {
    return (
        <>
            <h4>Thông tin thành viên</h4>
            <h6>(* là không bắt buộc)</h6>
            <Form>
                <Row className="mb-3">
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        md="5"
                        controlId="name"
                    >
                        <Form.Label>Họ và tên</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setField('name', e.target.value)}
                            required
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        md="4"
                        controlId="citizenId"
                    >
                        <Form.Label>Số căn cước công dân (*)</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            onChange={(e) =>
                                setField('citizenId', e.target.value)
                            }
                            isInvalid={!!errors.citizenId}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.citizenId}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        md="3"
                        controlId="dateOfBirth"
                    >
                        <Form.Label>Ngày sinh</Form.Label>
                        <Form.Control
                            type="date"
                            onChange={(e) =>
                                setField('dateOfBirth', e.target.value)
                            }
                            required
                            isInvalid={!!errors.dateOfBirth}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.dateOfBirth}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
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
                            onChange={(e) => setField('gender', e.target.value)}
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
                            onChange={(e) => setField('gender', e.target.value)}
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
                            onChange={(e) => setField('gender', e.target.value)}
                            isInvalid={!!errors.gender}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.gender}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        md="4"
                        controlId="relationWithHouseholder"
                    >
                        <Form.Label>Quan hệ với chủ hộ</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) =>
                                setField(
                                    'relationWithHouseholder',
                                    e.target.value
                                )
                            }
                            required
                            isInvalid={!!errors.relationWithHouseholder}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.relationWithHouseholder}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        md="4"
                        controlId="nation"
                    >
                        <Form.Label>Quốc tịch</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setField('nation', e.target.value)}
                            required
                            isInvalid={!!errors.nation}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.nation}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        md="4"
                        controlId="ethnic"
                    >
                        <Form.Label>Dân tộc</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setField('ethnic', e.target.value)}
                            required
                            isInvalid={!!errors.ethnic}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.ethnic}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        md="4"
                        controlId="religion"
                    >
                        <Form.Label>Tôn giáo</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) =>
                                setField('religion', e.target.value)
                            }
                            required
                            isInvalid={!!errors.religion}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.religion}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        md="4"
                        controlId="phoneNumber"
                    >
                        <Form.Label>Số điện thoại (*)</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) =>
                                setField('phoneNumber', e.target.value)
                            }
                            isInvalid={!!errors.phoneNumber}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.phoneNumber}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        md="5"
                        controlId="email"
                    >
                        <Form.Label>Email (*)</Form.Label>
                        <Form.Control
                            type="email"
                            onChange={(e) => setField('email', e.target.value)}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        md="3"
                        controlId="career"
                    >
                        <Form.Label>Nghề nghiệp (*)</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setField('career', e.target.value)}
                            isInvalid={!!errors.career}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.career}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        md="6"
                        controlId="hometown"
                    >
                        <Form.Label>Quê quán</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) =>
                                setField('hometown', e.target.value)
                            }
                            required
                            isInvalid={!!errors.hometown}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.hometown}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        as={Col}
                        md="6"
                        controlId="permanentAddress"
                    >
                        <Form.Label>Địa chỉ thường trú</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) =>
                                setField('permanentAddress', e.target.value)
                            }
                            required
                            isInvalid={!!errors.permanentAddress}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.permanentAddress}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
            </Form>
        </>
    );
}
export default OtherInfoForm;
