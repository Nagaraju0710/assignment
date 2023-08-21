import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login = (useData)=>(dispatch) => {
  // Complete the login functionality
  // console.log(useData,"data")
  dispatch({type:LOGIN_REQUEST})
  return axios.post("https://reqres.in/api/login",useData)
  .then((res)=>{
    // console.log(res.data.token,"hello")
    dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
  }).catch((err)=>{
    dispatch({type:LOGIN_FAILURE})
  })

};
