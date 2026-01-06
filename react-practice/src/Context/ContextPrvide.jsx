import React, { useState } from "react";
import { Mycontext } from "./Mycontext";

function ContextPrvide({ children }) {
  var a = 10;
  var[theme,setTheme]=useState("light")

  function ThemeChange(){
      setTheme(theme==='light'?'dark':'light')
  }

  const MycontextSend = {
    a,theme,setTheme
  };
  return (
    <>
      <Mycontext.Provider value={MycontextSend}>{children}</Mycontext.Provider>
    </>
  );
}

export default ContextPrvide;
