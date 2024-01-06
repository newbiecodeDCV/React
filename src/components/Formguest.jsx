import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useData5 } from '../Context/UseContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const FormGuest = () => {
    const navigate = useNavigate()
    const {setAndRedirect} = useData5()
    const [apartmentId, setApartmentId] = useState('');
    const [citizenId,setCitizenId] = useState('')
    const handleSubmit = () =>{
        setAndRedirect(apartmentId,citizenId)
        navigate('/Tableform')
    }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Số phòng</Form.Label>
        <Form.Control type="text" placeholder="Nhập số phòng" value={apartmentId} onChange={(e)=>{setApartmentId(e.target.value)}}
        />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Chứng minh nhân dân</Form.Label>
        <Form.Control type="text" placeholder="Nhập chứng minh nhân dân" value={citizenId} onChange={(e) =>{setCitizenId(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit" 
      onClick={handleSubmit}
      >
        Gửi
      </Button>
    </Form>
  );
}

export default FormGuest;