import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams,setSearchParams]=useSearchParams();
  const initalOrder=searchParams.get("order")
  const [order,setOrder]=useState(initalOrder||[])

  useEffect(()=>{
    const params={order:order};
    // order&&(params.order=order)
    setSearchParams(params)
  },[order])
  const handleSort=(e)=>{
    setOrder(e.target.value)
  }
  return (
    <DIV>
      <h3>Sort By Year</h3>
      <div>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} onChange={handleSort}/>
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onChange={handleSort}
        />
        <label>Descending</label>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3 data-testid="page-number">Page No. </h3>
      <button data-testid="previous-page">Previous</button>
      <br />
      <br />
      <button data-testid="next-page">Next</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;

  button {
    border: none;
    width: 100px;
    height: 40px;
    background-color: gray;
  }
`;
