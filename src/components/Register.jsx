import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    }
  return (
    <div className='background d-flex justify-content-center align-items-center '>
            <div className='contain p-3 border rounded '>
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-bold text-center">Create new Account</h1>
                    <div className="form-floating my-1">
                        <input type="text" className="form-control" name='name' id="floatingInput" value={input.name} placeholder="username" onChange={(e) =>  setInput({...input,[e.target.name]:e.target.value,})} />
                        <label for="floatingInput">Username</label>
                    </div>
                    <div class="form-floating">
                        <input type="email" className="form-control" name='email' id="floatingInput" value={input.email} placeholder="name@example.com" onChange={(e) =>  setInput({...input,[e.target.name]:e.target.value,})} />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating my-1">
                        <input type="password" className="form-control" name='password' value={input.password} id="floatingPassword" placeholder="Password" onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})} />
                        <label for="floatingPassword">Password</label>
                    </div>
                    
                    <button className="btn btn-primary w-100 py-2 my-2" type="submit">Register</button>
                    <p className='text-center'>Already Have an Account 
                    <Link to={"/login"} className="ms-2 link" type="submit">Login</Link>
                    </p>
                </form>
            </div>
        </div>
  )
}

export default Register