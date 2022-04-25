import React from "react";
import { useEffect, useState, useContext } from "react";
// import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

export const Grid = styled.div`
 display:grid;
 border: 1px solid red;
 grid-template-columns:1fr 1fr 1fr;


`;

const Books = () => {
  const [data, setData] = useState([]);
  const { token } = useContext(AuthContext);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    getData()
  }, []);

  let getData = async()=>{
    let res = await fetch(" http://localhost:8080/books")
    let Data= await res.json()
    console.log(Data)
    setData([...Data])
  }
  if (!token) return <NavLink to="/login">Login</NavLink>;
  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container" >
        {data.map((item)=>{
          return <BookCard key={item.id} item={item}/>
        })
          }
      </Grid>
    </>
  );
};
export default Books;
