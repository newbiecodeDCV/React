import { useState } from "react"
import { loginAPI } from "../service/UserService";
import { toast } from 'react-toastify';
const Login = () =>
{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const handleLogin = async ( ) => {
        try{
        if(!email || ! password){
            toast.error("Email/Password  is required!")
            return;
       }
        let res = await loginAPI(email,password);
        if(res  && res.data.accessToken ){
        localStorage.setItem("res",res.data.accessToken)
        }else{
            toast.error(res.data.message)
            console.log(res)
        }
    }catch(e){
        console.log(e);
      
    }
        
    
}
return (<>
    <div className="login-container col-4">
        <div className="title">Log in</div>
        <div className = "text">Email or username</div>
        <input type="text" placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />
       
        <div>
        <input type="password" placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
         />
         <i className="fa-solid fa-eye-slash"></i>
        </div>
        <button className = {email && password ? "active" : ""}
        disabled={email && password ? false :true}
        onClick={() => handleLogin()}
        >Login</button>
        <div className="back">
          Go back
        </div>
    </div>


</>)
}
export default Login