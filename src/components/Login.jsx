import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        const loguser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loguser.email && input.password === loguser.password){
            localStorage.setItem("logedin",true);
            navigate("/dashboard");
        }else if(input.email != loguser.email){
            alert("Wrong Email Id!");
        }else if(input.password != loguser.password){
            alert("Wrong password!");
        }
        
    }

  return (
    <div className='background d-flex justify-content-center align-items-center'>
    <div className='contain  p-3 border rounded'>
        <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-bold text-center">Login</h1>
            <div className="form-floating">
                <input type="email" className="form-control" name='email' id="floatingInput" placeholder="name@example.com" value={input.email} onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})} />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating my-1">
                <input type="password" className="form-control" name='password' id="floatingPassword" placeholder="Password" value={input.password} onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})} />
                <label for="floatingPassword">Password</label>
            </div>
            
            <button className="btn btn-primary w-100 my-2 py-2" type="submit">Login</button>
            <p className='text-center'>Don't Have an Account?
                    <Link to={"/register"} className="ms-2 link" type="submit">Register here</Link>
                    </p>
        </form>
    </div>
</div>
  )
}

export default Login
