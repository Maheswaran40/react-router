import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const random = Math.floor(Math.random() * 10) + 1;
    
    var Navigate = useNavigate()
    
    function FormSub(e){
        e.preventDefault()
        localStorage.setItem("isLoggedIn",random)
        Navigate("/home")
    }
  return (
    <>
    <form action="" onSubmit={FormSub}>
        <input type="text" placeholder='UserName' />
        <input type="password" placeholder='Passoword' />
        <input type="submit" value="login" />
    </form>
    
    </>
  )
}

export default Login