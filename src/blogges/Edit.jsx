import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const Edit = () => {
    const { rowIndex } = useParams();
    const nevigate = useNavigate();
    const username = JSON.parse(localStorage.getItem("user"));
    const [data, setData] = useState({
        Name: username.name,
        Topic: "",
        Blog: "",
        Date: new Date().toString(),
    });

    const getData = async () => {
        try {
            const res = await fetch(
                `https://sheet.best/api/sheets/f8b5d75d-df42-4e15-b2fc-bf1df36b3d56/${rowIndex}`
            );
            const data = await res.json();
            setData(data[0]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://sheet.best/api/sheets/f8b5d75d-df42-4e15-b2fc-bf1df36b3d56/${rowIndex}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                nevigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='background d-flex justify-content-center align-items-center'>
            <div className='contain  p-3 border rounded '>
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-bold text-center">Edit Your Blog</h1>
                    <div className="mb-3">
                        <label className="form-label">Topic:</label>
                        <input type="text" className="form-control" name="Topic" value={data.Topic} onChange={handleChange} id="exampleFormControlInput1" placeholder="enter your topic" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Blog Content:</label>
                        <textarea className="form-control" name="Blog" value={data.Blog} onChange={handleChange} id="exampleFormControlTextarea1" placeholder="enter your blog content" rows="4"></textarea>
                    </div>
                    <div className="btnGroup d-flex">
                        <button className="btn btn-primary w-100 my-2 py-2 w-50" type="submit">Update</button>
                        <Link to="/dashboard" className="btn btn-danger w-100 my-2 py-2 w-50" >Close</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit
