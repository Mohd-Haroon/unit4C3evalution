import React from "react";
import { Link } from "react-router-dom";
import styled  from "styled-components";
export const Flex = styled.div`
//  add required style
`;
export const BookCard = ({item}) => {
  console.log("props",item)
  // const { id, title, isbn, pageCount, thumbnailUrl } = {props};
  return (
    <div >
    <Link to = {`/books/${item.id}`}>
      <Flex >
        <img src={item.thumbnailUrl} alt={item.title} height = "200px" width={"200px"} />
        <h3>{item.title}</h3>
        <h4>{item.isbn}</h4>
      </Flex>
    </Link>
    </div>
  );
};
