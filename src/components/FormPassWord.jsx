import React, { useState } from 'react';
import { Form, Button,  Col } from 'react-bootstrap';
import { patchPassWord } from '../service/UserService';
import { toast } from 'react-toastify';
const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
<<<<<<< HEAD
   try{
    e.preventDefault();
   
    if (newPassword === confirmPassword){
    let res = await patchPassWord(oldPassword,newPassword)
    console.log(res)
    if(res && res.status ==='Success'){
        setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    toast.success("Đổi mật khẩu thành công")
    }else{
        if (Array.isArray(res.data.message)) {
            toast.error(res.data.message[0]);
          } else {
            toast.error(res.data.message);
          }
    }
    }else{
        toast.error("Xác nhận lại mật khẩu")

=======
    try {
      e.preventDefault();
  
      // Thêm xử lý đổi mật khẩu ở đây
  
      if (newPassword === confirmPassword){
      let res = await patchPassWord(oldPassword,newPassword)
      console.log(res)
      if(res && res.status ==='Success'){
          setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      toast.success("Đổi mật khẩu thành công")
      }else{
          if (Array.isArray(res.data.message)) {
              toast.error(res.data.message[0]);
            } else {
              toast.error(res.data.message);
            }
      }
      }else{
          toast.error("Xác nhận lại mật khẩu")
  
      }
    } catch (error) {
    console.log("🚀 ~ handleSubmit ~ error:", error)
>>>>>>> 3d99952321d02a8e7395b6e5663ea00038a5fb85
    }
  
  }catch(e){
    console.log(e)
   }
  };
    
  

  return (
  
    <Form onSubmit={handleSubmit}>
      <Col className="mx-auto">
        <Col md={4}>
          <Form.Group controlId="formOldPassword">
            <Form.Label>Mật Khẩu Cũ</Form.Label>
            <Form.Control
              type="password"
              placeholder="nhập mật khẩu cũ"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="mb-3"
            />
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group controlId="formNewPassword">
            <Form.Label>Mật khẩu mới</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu mới"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mb-3"
            />
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Xác nhận mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Hãy xác nhận mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mb-3"
            />
          </Form.Group>
        </Col>
      </Col>

      <Button variant="primary" type="submit">
        Thay đổi mật khẩu
      </Button>
    </Form>
    
  );
};

export default ChangePasswordForm;