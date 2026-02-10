import React, { useEffect, useState } from 'react'

function Useeffect1() {
    console.log("Useeffect1 rendering");
    var[count,setCount]=useState(0)
    function increase(){
        setCount(++count)
    }
    var [input,setInput]=useState([])
    console.log("input",input);
    
    async function getData(){
        var URL= await fetch("https://jsonplaceholder.typicode.com/users")
        var data=await URL.json()
        console.log("data",data);
        setInput(data)
    }
    
    useEffect(()=>{
        getData()
    },[])
    
    return (
    <>
        <h1>Useeffect1</h1>
        <h1 >{count}</h1>
        <button onClick={increase}>Increase</button>
        <h1>{input.map((value,index)=>(
            value.name
        ))}</h1>
    </>
  )
}

export default Useeffect1