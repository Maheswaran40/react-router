import React from 'react'
import { useLocation } from 'react-router-dom'

function About() {
    var location=useLocation()
    const {name,age}=location.state || {}
  return (
    <>
    
    
    <h1>About Name : {name} , age : {age}</h1>
    </>
  )
}

export default About