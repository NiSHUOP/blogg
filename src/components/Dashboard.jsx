import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const username = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const res = await fetch(`https://sheet.best/api/sheets/f8b5d75d-df42-4e15-b2fc-bf1df36b3d56?_format=index`);
      const data = await res.json();
      console.log(data);
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
//handle for deletion
  const handleDelete = async (rowIndex) => {
    try {
      const res = await fetch(`https://sheet.best/api/sheets/f8b5d75d-df42-4e15-b2fc-bf1df36b3d56/${rowIndex}`,
        {
          method: "DELETE",
        }
      );
      // use for update deletion on UI
      if(res.ok){
        const updateData = data.filter((_,i) => i !==rowIndex)
        setData(updateData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // const filteredBlogs = data.filter(data => data.Name === username.name);

  return (
    <div>
      <h1 className='text-center mt-4'>Welcome, {username.name}!</h1>
      <div className='container my-5'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
        {(data) ?.map((item, i) => (
          <div className="col" key={i}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{item.Topic}</h5>
                <p className="card-text">{item.Blog}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className=" text-muted">~{item.Name}</p>
                  <small className="text-muted">{item.Date}</small>
                </div>
                <div>
                  <button className='btn btn-danger' onClick={() => handleDelete(i)}>Delete</button>
                  <Link to={`/edit/${i}`} className='btn btn-success ms-2'>Edit</Link>
                </div>
              </div>
            </div>
          </div>
        ))}


        </div>
      </div>




    </div>
  )
}
export default Dashboard
