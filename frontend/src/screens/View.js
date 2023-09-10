import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
const View = () => {
  const [getData, setGetData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [ageFilterOne, setAgeFilterOne] = useState(false);
  const [ageFilterSecond, setAgeFilterSecond] = useState(false);

  useEffect(() => {
    axios
      .get("https://mernbyharsh.onrender.com/api/getUser")
      .then((res) => {
        const ans = res.data;
        setGetData(ans);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getData]);

  const deleteUser = async (id)=>{
    await axios.delete(`https://mernbyharsh.onrender.com/api/deleteUser/${id}`).then(()=>{
      alert("User deleted successfully")
      setGetData(getData.filter((data)=>data._id !==data.id));
    }).catch((error)=>{
      alert(error);
    })
  }

  useEffect(() => {
    // Use the filter method to filter users based on the search query
    const filtered = getData.filter((user) =>{

      const filterName = user.name.toLowerCase().includes(searchQuery.toLowerCase());
      const filterAge = user.age.toString().includes(searchQuery);
      const filterEmail = user.email.toLowerCase().toString().includes(searchQuery.toLowerCase());
      const ageGroupMatchOne = ageFilterOne ? user.age >= 50 && user.age <= 100 : true;
      const ageGroupMatchSecond = ageFilterSecond ? user.age >= 18 && user.age <= 49 : true;
      return (filterName || filterAge || filterEmail) && (ageGroupMatchOne && ageGroupMatchSecond);

    }
      
    );
    setFilteredUsers(filtered);
  }, [searchQuery, getData,ageFilterOne,ageFilterSecond]);

  return (
    <div>
      <Navbar />
      <div
        className="form d-flex"
        style={{ width: "30%", margin: "auto", marginTop: "50px" }}
      >
        <input type="search" placeholder="Search name of user" className="form-control"         value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <hr />
      <div className="d-flex">
      <div style={{ width: "30%", margin: "auto"}}>
        <input
          type="checkbox"
          checked={ageFilterOne}
          onChange={() => setAgeFilterOne(!ageFilterOne)}
        />
        Age 50-100
      </div>
      <div style={{ width: "20%", margin: "auto"}}>
        <input
          type="checkbox"
          checked={ageFilterSecond}
          onChange={() => setAgeFilterSecond(!ageFilterSecond)}
        />
        Age 18-49
      </div>
      </div>
      <hr />
      <div className="container m-2">
        <div className="row">
          {filteredUsers.map((obj,index) => {
            return (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div
                  className="card border-light mb-3"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card-header bg-info text-black">
                    {obj.name}
                  </div>
                  <div className="card-body">
                    <h6 className="card-title">{obj.email}</h6>
                    <hr />
                    <p className="card-text">{obj.age}</p>
                    <p className="card-text">{obj._id}</p>
                    <Link to={`/updateUser/${obj._id}`} className="btn btn-primary m-3">Edit</Link>
                    <button className="btn btn-danger" onClick={() => deleteUser(obj._id)}>Delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default View;
