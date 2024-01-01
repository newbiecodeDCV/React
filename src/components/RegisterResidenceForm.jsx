import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HouseholderInfoForm from './HouseholderInfoForm';
import OtherInfoForm from './OtherInfoForm';
import { registerResidence } from '../service/PeopleService';
import ErrorModal from './ErrorModal';
import { useNavigate } from 'react-router-dom';
import SuccessModal from './SuccessModal';
function RegisterResidenceForm() {
    const navigate = useNavigate();
    const [errorModalShow, setErrorModalShow] = useState(false);
    const [successModalShow, setSuccessModalShow] = useState(false);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null,
            });
    };
    const onStatusChange = (e) => setField('status', e.target.value);
    const onApartmentIdChange = (e) => setField('apartmentId', e.target.value);
    const onSetIsCreateHousehold = (e) => {
        setField('isCreateHousehold', e.target.value);
        setForm({
            apartmentId: form.apartmentId,
            isCreateHousehold: e.target.value,
            status: form.status,
        });
    };
    const findFormErrors = () => {
        const {
            apartmentId,
            isCreateHousehold,
            status,
            name,
            nation,
            dateOfBirth,
            ethnic,
            religion,
            hometown,
            permanentAddress,
            gender,
            citizenId,
            relationWithHouseholder,
        } = form;
        const newErrors = {};
        if (!name || name === '') newErrors.name = 'Chưa nhập họ tên';
        if (!nation || nation === '') newErrors.nation = 'Chưa nhập quốc tịch';
        if (!apartmentId || apartmentId === '')
            newErrors.apartmentId = 'Chưa nhập số hiệu căn hộ';
        if (!isCreateHousehold || isCreateHousehold === '')
            newErrors.isCreateHousehold = 'Chưa chọn loại đăng ký';
        if (!status || status === '')
            newErrors.status = 'Chưa chọn loại cư trú';
        if (!dateOfBirth || dateOfBirth === '')
            newErrors.dateOfBirth = 'Chưa nhập ngày sinh';
        if (!ethnic || ethnic === '') newErrors.ethnic = 'Chưa nhập dân tộc';
        if (!religion || religion === '')
            newErrors.religion = 'Chưa nhập tôn giáo';
        if (!hometown || hometown === '')
            newErrors.hometown = 'Chưa nhập quê quán';
        if (!permanentAddress || permanentAddress === '')
            newErrors.permanentAddress = 'Chưa nhập địa chỉ thường trú';
        if (!gender || gender === '') newErrors.gender = 'Chưa chọn giới tính';
        if ((!citizenId || citizenId === '') && isCreateHousehold === 'true')
            newErrors.citizenId = 'Chưa nhập số căn cước';
        if (
            (!relationWithHouseholder || relationWithHouseholder === '') &&
            isCreateHousehold === 'false'
        )
            newErrors.relationWithHouseholder =
                'Chưa nhập mối quan hệ với chủ hộ';
        return newErrors;
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = findFormErrors();
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors);
        } else {
            form.isCreateHousehold =
                form.isCreateHousehold === 'true' ? true : false;
            // No errors! Put any logic here for the form submission!
            const response = await registerResidence(form);
            console.log(response)
            if (response.data?.status === 'Fail') {
                setErrorMessage(response.data.message);
                setErrorModalShow(true);
            } else if(response.status === 'Success') {
                setSuccessModalShow(true);
            }
            console.log()
        }
    };
    return (
        <>
            <h2
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                Đăng ký nhân khẩu
            </h2>
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="apartmentId">
                    <Form.Label>Số hiệu căn hộ</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nhập số hiệu căn hộ"
                        onChange={onApartmentIdChange}
                        required
                        isInvalid={!!errors.apartmentId}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.apartmentId}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="status">
                    <Form.Label>Loại cư trú</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Thường trú"
                        name="status"
                        value="Thường trú"
                        onChange={onStatusChange}
                        required
                        isInvalid={!!errors.status}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.status}
                    </Form.Control.Feedback>
                    <Form.Check
                        type="radio"
                        label="Tạm trú"
                        name="status"
                        value="Tạm trú"
                        onChange={onStatusChange}
                        required
                        isInvalid={!!errors.status}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.status}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="type">
                    <Form.Label>Loại đăng ký</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Đăng ký hộ mới"
                        name="isCreateHousehold"
                        value={true}
                        onChange={onSetIsCreateHousehold}
                        required
                        isInvalid={!!errors.isCreateHousehold}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.isCreateHousehold}
                    </Form.Control.Feedback>
                    <Form.Check
                        type="radio"
                        label="Đăng ký vào hộ sẵn có"
                        name="isCreateHousehold"
                        value={false}
                        onChange={onSetIsCreateHousehold}
                        required
                        isInvalid={!!errors.isCreateHousehold}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.isCreateHousehold}
                    </Form.Control.Feedback>
                </Form.Group>
                {/* <Button variant="primary" type="submit">
                    Submit
                </Button> */}
                {(form.isCreateHousehold === 'true' || form.isCreateHousehold === true) && (
                    <HouseholderInfoForm
                        setField={setField}
                        errors={errors}
                    ></HouseholderInfoForm>
                )}
                {(form.isCreateHousehold === 'false' || form.isCreateHousehold===false)&& (
                    <OtherInfoForm setField={setField} errors={errors} />
                )}
                <Button type="submit">Gửi</Button>
                {errorMessage !== '' && (
                    <ErrorModal
                        show={errorModalShow}
                        onHide={() => {
                            setErrorModalShow(false);
                            navigate('/');
                        }}
                    >
                        {errorMessage}
                    </ErrorModal>
                )}
                {
                    <SuccessModal
                        show={successModalShow}
                        onHide={() => {
                            setErrorModalShow(false);
                            navigate('/');
                        }}
                    ></SuccessModal>
                }
            </Form>
        </>
    );
}
export default RegisterResidenceForm;
