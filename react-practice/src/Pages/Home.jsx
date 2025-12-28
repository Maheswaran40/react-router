import React, { useState } from 'react'
import products from './Prodcuts'
import { useNavigate } from 'react-router-dom'
import About from './About'


function Home() {
var navigate=useNavigate() 
const [count,setCount]=useState( Array(products.length).fill(0))
  const fun2 = (index) => {
    const newCounts = [...count]
    newCounts[index] += 1
    setCount(newCounts)
  }
const[user,setUser]=useState({
  name:"",age:""
})
function dataShare(){
  navigate("/About",{state:user})
}
  return (
    <>
    <h1>Home page</h1>
    
    <div className="row" >
    {products.map((value,index)=>(
            <div className="col-lg-4 col-sm-6 " key={index}>
                <div className="card">
                      <img src={value.image} width={"100px"} height={"200px"} alt="" onClick={()=>navigate(`/products/${value.id}`)} /> 
                    <div className="card-body">
                        <span>Name : {value.name}</span>
                        <span>Price : {value.Price}</span>
                        <span>Count: {count[index]}</span>

                        <button onClick={()=>fun2(index)}>+</button>
                    </div>
                </div>
            </div>
    ))}
    </div>
    {/* Form data sharing to About Component Using useState Hook */}
    <form action="">
      <input type="text" placeholder='Name' onChange={(e)=>setUser({...user,name:e.target.value})} />
      <input type="text" placeholder='Age' onChange={(e)=>setUser({...user,age:e.target.value})}/>
    </form>
   <button onClick={dataShare}>
  Show About
</button>


    </>
  )
}

export default Home
// Used to store and update data inside a component
// 👉 When data changes → UI automatically updates
// const [state, setState] = useState(initialValue)
