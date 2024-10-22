



import React from 'react'
import { useDispatch } from 'react-redux'
import { loginRequest, productDataRequest } from '../redux/actions'

const Login = () => {

const dispatch = useDispatch()
    const handleClick = ()=>{dispatch(loginRequest({username : "irfan" , email : "irfanusuf33@gmail.com" , password : "3274564"}))} 
  return (
    <div>Login



    <button onClick={handleClick}> 
        Click me 
    </button>


    </div>
  )
}

export default Login