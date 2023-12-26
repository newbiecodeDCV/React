import { useEffect, useState } from "react"
import { loginAPI } from "../service/UserService";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
const Login = () =>
{   
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [isShowPassword,setIsShowPassword] = useState(false)
    const [loadingAPI,setLoadingAPI] = useState(false);
    useEffect(()=>{
     let token = localStorage.getItem("res")
     if(token){
        navigate("/");
     }
    },[])
    const handleLogin = async ( ) => {
        try{
        if(!email || ! password){
            toast.error("Email/Password  is required!")
            return;
       }
       setLoadingAPI(true)
        let res = await loginAPI(email,password);
        if(res  && res.data.accessToken ){
        localStorage.setItem("res",res.data.accessToken)
        navigate('/')
        }else{
            toast.error(res.data.message)
            console.log(res)
        }
    }catch(e){
        console.log(e);
      
    }
        
    setLoadingAPI(false);
}
return (<>
    <div className="login-container col-4">
        <div className="title">Log in</div>
        <div className = "text">Email or username</div>
        <input type="text" placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />
       
        <div className="input-2">
        <input type={isShowPassword === true ?"text":"password"} placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
         />
         <i className={isShowPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"}
         onClick={() => setIsShowPassword(!isShowPassword)}
         ></i>
        </div>
        <button className = {email && password ? "active" : ""}
        disabled={email && password ? false :true}
        onClick={() => handleLogin()}
        >{loadingAPI && <i class="fa-solid fa-sync fa-spin"></i>}
        &nbsp;Login</button>
        <div className="back">
          Go back
        </div>
    </div>


</>)
}
export default Login