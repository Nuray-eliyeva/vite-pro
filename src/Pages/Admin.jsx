import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Admin() {
    const [data, setdata] = useState([])
    const [selectValue, setSelectValue] = useState("normal")
    const [search, setSearch] = useState(" ")
    /*--get--*/
    useEffect(() => {
      axios.get('http://localhost:8000/cards')
      .then(res=>setdata(res.data))
    }, [])
    /*-delete*/
    const deleteData=function(id){
        axios.delete('http://localhost:8000/cards/'+id)
        .then(res=>console.log(res.data))
    }
    /*---sort-*/
    const sortData=function(){
        if(selectValue="a-z"){
          return data.toSorted((a,b)=>a.name.localeCompare(b.name))
        }
        else if(selectValue="z-a"){
            return data.toSorted((a,b)=>b.name.localeCompare(a.name))
          }
          else{
            return[...data]
          }
    }
    let sortedData=sortData()
    //--Filter*/
    const filteredData=sortedData.filter(item=>{
        return item.name.toLowerCase().startsWith(search.toLowerCase())
    })
    
    return (
        <div>
           
           <div className="links">
            <select onChange={(e)=>setSelectValue(e.target.value)}>
                <option value="normal">Normal</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
            </select>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <Link to='/add'>Add</Link>
           </div>

            <table>
                <thead>
                    <tr>
                        <td>salam</td> <td>salam</td> <td>salam</td> <td>salam</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map(item => {
                            return (
                             <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                <td>{item.id}</td>
                                <td><button onClick={()=>deleteData()}>delete</button></td>
                             </tr>
                             )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Admin