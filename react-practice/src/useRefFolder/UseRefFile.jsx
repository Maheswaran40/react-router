// import React, { useEffect, useRef } from 'react'

// function UseRefFile() {
//     console.log("Single Render");
    
//     const inputRef=useRef(null)
//     useEffect(() => {
//     inputRef.current.focus(); // direct DOM access
//   }, []);


//    const countRef = useRef(0);

//   const handleClick = () => {
//     countRef.current += 1;
//     console.log("Clicked:", countRef.current);
//   };
//  const timerRef = useRef(null);

//   const start = () => {
//     timerRef.current = setInterval(() => {
//       console.log("Running...");
//     }, 1000);
//   };

//   const stop = () => {
//     clearInterval(timerRef.current);
//   };
//   return (
//     <>
//     <form action="" >
//         <input type="text" ref={inputRef}/>
//         <input type="submit" />
//     </form>
//     <button onClick={handleClick}>Increase</button>
//      <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>

//     </>
//   )
// }

// export default UseRefFile
import React, { useEffect, useRef } from 'react'

function UseRefFile() {
  console.log("single render only");
  
  var increaseRef=useRef()
  var FocusRef=useRef()
  function increaseFun(){
    increaseRef.current.innerText ++

  }

  useEffect(()=>{
    FocusRef.current.focus()
  },[])

  var timeRef=useRef(null)
  
  function StartFun(){

    timeRef.current=setInterval(() => {
      console.log("Running ....");
      
    }, 1000);
  }
  function StopFun(){
    clearInterval(timeRef.current)
    alert("puriyalanu sollathinga")
  }
   const pos = useRef({ x: 0, y: 0 });

  const handleMove = (e) => {
    pos.current = { x: e.clientX, y: e.clientY };
    
    console.log(pos.current,"axis");
  };
    return (
    <>

      <h1 ref={increaseRef}>0</h1>
      <button onClick={increaseFun} className='btn btn-primary'>Increase</button>

      <input type="text" placeholder='Name' ref={FocusRef}/>
      <button onClick={StartFun}>Start</button>
      <button onClick={StopFun}>stop</button>
      <div
      onMouseMove={handleMove}
      style={{ height: "100vh" }}
    >
      Move mouse & check console 🐭
    </div>
    </>
  )
}

export default UseRefFile