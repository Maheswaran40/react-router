import React, { useEffect, useRef } from 'react'

function UseRefFile() {
    console.log("Single Render");
    
    const inputRef=useRef(null)
    useEffect(() => {
    inputRef.current.focus(); // direct DOM access
  }, []);


   const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log("Clicked:", countRef.current);
  };
 const timerRef = useRef(null);

  const start = () => {
    timerRef.current = setInterval(() => {
      console.log("Running...");
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
  };
  return (
    <>
    <form action="" >
        <input type="text" ref={inputRef}/>
        <input type="submit" />
    </form>
    <button onClick={handleClick}>Increase</button>
     <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>

    </>
  )
}

export default UseRefFile