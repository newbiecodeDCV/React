import { useEffect, useState } from "react"
import { loginAPI } from "../service/UserService";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../Context/UseContext';
const Login = () =>
{   
    const {loginContext} = useContext(UserContext)
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [isShowPassword,setIsShowPassword] = useState(false)
    const [loadingAPI,setLoadingAPI] = useState(false);
    useEffect(()=>{
     let token = localStorage.getItem("accessToken")
     if(token){
        navigate("/dashboard");
     }
    },[])
    const handleBack  = () =>{
      navigate('/')
    }
    const handleLogin = async ( ) => {
        try{
        if(!email || ! password){
            toast.error("Email/Password  is required!")
            return;
       }
       setLoadingAPI(true)
        let res = await loginAPI(email,password);
        console.log(res)
        if(res  && res.data.accessToken ){
        loginContext(email,res.data.accessToken,res.data.role )
        navigate("/dashboard");
    
      }else{
            toast.error(res.data.message)
        }
    }catch(e){
        console.log(e);
      
    }
        
    setLoadingAPI(false);
}
return (<>
    <div className="login-container col-12 col-sm-4">
        <div className="title">Đăng nhập</div>
        <div className = "text">Email</div>
        <input type="text" placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />
       
        <div className="input-2">
        <input type={isShowPassword === true ?"text":"password"} placeholder="Mật khẩu"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
         />
         <i className={isShowPassword === true ?"fa-solid fa-eye":"fa-solid fa-eye-slash"}
         onClick={() => setIsShowPassword(!isShowPassword)}
         ></i>
        </div>
        <button 
        className = {email && password ? "active" : ""}
        disabled={(email && password) ? false :true}
        onClick={() => handleLogin()}
        >
        {loadingAPI && <i className="fa-solid fa-sync fa-spin"></i>}
        &nbsp;Đăng nhập
        </button>
        <div className="back">
        <span onClick={handleBack}>&nbsp;Quay lại </span>
        </div>
    </div>


</>)
}
export default Login