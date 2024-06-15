import { Link, useNavigate } from 'react-router-dom'
const Button = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("logedin");
        navigate("/");
    }
    return (
        <div>
            {localStorage.logedin ? <>
                {
                    location.pathname === '/dashboard' ?
                        <Link className="btn btn-primary ms-3" to={"/add"}>+ Add</Link> : <></>
            }
                <Link className="btn btn-danger ms-3" onClick={handleLogout} to={"/"}>Log Out</Link>
            </>
                :
                <Link className="btn btn-success ms-3" to={"/login"}>Sign In</Link>
            }
        </div>
    )
}

export default Button
