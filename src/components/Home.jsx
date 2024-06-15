// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//         <h1 className='text-center'>Home Page</h1>
//     </div>
//   )
// }

// export default Home

import { useEffect, useState } from 'react';

const Home = () => {
  const username = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const res = await fetch("https://sheet.best/api/sheets/f8b5d75d-df42-4e15-b2fc-bf1df36b3d56?_format=index");
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


  return (
    <>
      <div className='container mt-5'>
<h1 className='text-center my-5'>You can write your thoughts here!</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
        {data?.map((item, i) => (
          <div className="col" key={i}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">{item.Topic}</h3>
                <p className="card-text">{item.Blog}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className=" text-muted">~{item.Name}</p>
                  <small className="text-muted">{item.Date}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  )
}
export default Home

