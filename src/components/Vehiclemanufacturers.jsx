import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Vehiclemanufacturers = () => {
    const [data,setData]=useState([])
    const [q,setQ]=useState("")
    const [filtered,setfilterData]=useState([])


const api=()=>{
    axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json&page=2")
    .then((res)=>{
        // console.log(res.data.Results);
        if(q=="") setData(res.data.Results)
        else{
            let query=q.toLowerCase()
            res.data.Results.map((i)=>{
                return setData(i.Mfr_Name.toLowerCase().includes(query))
                
            })
        }
        })
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{api()},[])



  return (
    <center>
    <h1>VEHICLE MANUFACTURERS</h1>
    <div className="serach-bar">
    <label htmlFor="search">Search : </label> &nbsp;
    <input type="text" id='search' onChange={(e)=>{setQ(e.target.value)
    }} />
    <div className="filter">
    <label htmlFor="filter">Filter by Vehicle Type</label> &nbsp;
    <select id="filter">
    <option value="All">All</option>
    <option value="">Motorcycle</option>
    <option value="">Trailer</option>
    <option value="">Truck</option>
    </select>

    </div>
    </div>

    <table>
      <thead>
        <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Type</th>
        </tr>
      </thead>

      <tbody>
        {   
        data.map((item)=>{
            return <tr key={item.id}>
                <td>
                    {item.Mfr_Name}
                </td>
                <td>
                    {item.Country}
                </td>
                <td>
                    {item.VehicleTypes.map((e)=>{
                        return e.Name
                    })}
                </td>
            </tr>
        })}
      </tbody>
    </table>
    </center>
  )
}

export default Vehiclemanufacturers