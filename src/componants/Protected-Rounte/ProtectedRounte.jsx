import React, { useEffect, useState } from 'react'

const ProtectedRounte = ({children  }) => {
    const [user ,setuser]=useState({})
    useEffect(()=>{
const user= localStorage.getItem("User");
console.log(user);


    },[])
  return (
    <div>{children}</div>
  )
}

export default ProtectedRounte