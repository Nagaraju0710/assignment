import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { store } from "../Redux/store";
import { login } from "../Redux/Authentication/action";

export const Login = () => {
 const [email,setEmail]=useState("");
 const [password,setPAssword]=useState("");
 const dispatch=useDispatch();
 const navigate=useNavigate();
 const location=useLocation()
const {isAuth,isError}=useSelector((store)=>{
  return{
    isAuth:store.authReducer.isAuth,
    isError:store.authReducer.isError,
  }
},shallowEqual);




// console.log(useData,"hhiseu")
const handleLogin=(e)=>{
  e.preventDefault()
  let useData={
    email,password
  }
  console.log(useData)
  dispatch(login(useData)).then(()=>{
    navigate(location.state,{replace:true})
  })


}
console.log(isAuth,"auth")


  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPAssword(e.target.value)}
        o
      />
      <button data-testid="user-login" onClick={handleLogin}>Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }
  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
