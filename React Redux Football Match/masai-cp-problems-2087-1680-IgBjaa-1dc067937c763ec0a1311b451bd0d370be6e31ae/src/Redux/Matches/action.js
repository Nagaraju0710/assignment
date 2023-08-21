import axios from "axios";
import { GET_MATCH_FAILURE, GET_MATCH_REQUEST, GET_MATCH_SUCCESS } from "./actionTypes";

export const getMatches = (paramObj)=>(dispatch) => {
  // Complete the logic
  dispatch({type:GET_MATCH_REQUEST})
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/matches`,paramObj)
  .then((res)=>{
    // console.log(res.data)
    dispatch({type:GET_MATCH_SUCCESS,payload:res.data})
  })
  .catch((err)=>{
    dispatch({type:GET_MATCH_FAILURE})
  })
};
