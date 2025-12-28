import React from 'react'
import back from "../assets/Images/Error.png"

function Error() {
  const style1 = {
  fontSize: "150px",
  backgroundImage: `url(${back})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundClip: "text",
  color: "transparent"
}

  var style2={
    display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"
  }
  return (
    <div style={style2}>
    
    <h1 style={style1}>Page Not Found</h1>
    </div>
  )
}

export default Error