import axios from 'axios';
import React, { useEffect, useState } from "react";


export default function GroceryList() {

    const [inputdata, setinputdata] = useState("")
    const[apidata,setapidata] = useState([])

    const handleinput = (e) => {
        setinputdata(e.target.value)
    }

    const handlepost = async  () => {
        let body={
            task: inputdata
        }
         let res = await axios.post("http://localhost:3000/todoList",body)

         handleget()
    }
    const handleget = async () => {
        let res = await axios.get("http://localhost:3000/todoList")
        setapidata(res.data)

    }
    useEffect(()=>{
        handleget()
    },[])

    const handledelete =(id)=>{
        let res = axios.delete("http://localhost:3000/todoList" +id)
        handleget();
    }
const handleupdate = async (ind)=>{
    let changedname= prompt("enter u r update text",apidata[ind].task)
    let newbody = {
        id:apidata[ind].id,
        task:changedname
    }
    let res =await axios.put('http://localhost:3000/todoList/${apidata[ind].id}',newbody)
    handleget();

    

}



    return( 

        <div>

            <h1>GroceryList</h1>
         <input onChange={handleinput} placeholder="grocery" />
            <button onClick={handlepost}>send </button>


            {apidata.map((da,i)=>(
                <div>
                    <h2>{da.task}</h2>
                    <button onClick={()=>handleupdate(i)}>Update</button>
                    <button onClick={()=>handledelete(da.id)}>delete</button>
                    </div>
            ))}
    </div >
        )

}