import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initalState={
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
}
export const reducer = (state=initalState,{type,payload}) => {
  // complete the reducer
  switch (type){
    case LOGIN_REQUEST:
      return {...state,isLoading:true};
    case LOGIN_FAILURE:
      return {...state,isLoading:false,isError:true}
    case LOGIN_SUCCESS:
      return {...state,isLoading:false,isError:false,isAuth:true,token:payload}
    default:
      return state
  }
};
