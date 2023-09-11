import { useState } from "react"
import './Login.css'
export const Login = () =>{
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[showPassword,setShowPassword] = useState(false);
    const handleSubmit = () =>{

    }
    return (
        <div className="row text-center h-100 ">
            <div className="my-auto border rounded py-5 d-flex flex-column align-items-center">
                <h1 className="mb-5 h1">Login/SignUp</h1>
                <form onSubmit={handleSubmit} className="w-75">
                    <div className="form-group my-2 ">
                        <input type="text" class="form-control" id="login-username" aria-describedby="login-username" placeholder="Enter Username "  value={username} onChange={e => setUsername(e.target.value)}/>
                        <small id="login-username" hidden class="form-text text-muted">Error messages to be shown here</small>
                    </div>
                    <div className="form-group my-2">
                        <input type={showPassword?"text":"password"} class="form-control" id="login-password" aria-describedby="login-password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                        <small id="login-password" hidden class="form-text text-muted">Error messages to be shown here</small>
                    </div>
                    <button type="submit" className="btn btn-primary px-5 py-2 mt-3" >Login/SignUp</button>
                </form>
            </div>
        </div>
    )
}