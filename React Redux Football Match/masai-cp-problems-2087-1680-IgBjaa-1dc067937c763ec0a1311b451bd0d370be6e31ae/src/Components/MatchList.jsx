import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getMatches } from "../Redux/Matches/action";
import { MatchCard } from "./MatchCard";

export const MatchList = () => {
  const dispatch=useDispatch();
  const location=useLocation();
  const matches=useSelector(store=>store.matchReducer.matches)
  console.log(matches,"matches")
  const [searchParams,setSearchParams]=useSearchParams();
  let paramObj={
    params:{ 
      _order:searchParams.get("order"),
    _sort:searchParams.get("order")&&"year"
  }
   
  }
  console.log(paramObj,"paramobj")
  useEffect(()=>{
    dispatch(getMatches(paramObj))
  },[paramObj])
  return <div data-testid="match-list">{/* // Show matches here  */}
  {matches.length>0&& matches.map((ele)=>(
    <MatchCard key={ele.id}{...ele}/>
  ))}
  </div>;
};
