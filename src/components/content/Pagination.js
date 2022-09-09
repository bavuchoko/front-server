import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const PageUl = styled.ul`

`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  padding: 3px;
  border-radius: 5px;
  background-color: #f1f7fd;

`;

const PageSpan = styled.span`
  text-align: center;
  display: inline-block;
  width: 20px;
  padding: 3px;
  border-radius: 50px;
  background-color: #f1f7fd;
  &:hover {
    cursor: pointer;
    font-weight: 900;
  }
`;

const tempStyle={
    color:"white",
    background:"#4d8bcb"
}

const tempStyle2={
    background:"#f1f7fd"
}
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {



const pageNumbers = [];
for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
}

    const [selected,setSelected] =useState(1);
    const aaaeeefff=(number)=>{
        setSelected(number);
    }
    return (
        <div>
            <nav className="width-100per pagination-nav">

                <PageUl className="pagination noulstyle">
                <PageSpan onClick={() => {paginate(1)}} className="page-link">
                    &#60;&#60;
                </PageSpan>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    {pageNumbers.map((number) => (
                        <PageLi key={number} className="page-item">
                            <PageSpan

                                style={selected === number? tempStyle: tempStyle2 }
                                onClick={() => {
                                paginate(number)
                                aaaeeefff(number)
                            }
                            } className="page-link">
                                {number}
                            </PageSpan>
                        </PageLi>
                    ))}
                    &nbsp;&nbsp; &nbsp;&nbsp;
                <PageSpan onClick={() => {paginate(pageNumbers.length)}} className="page-link">
                    &#62;&#62;
                </PageSpan>
                </PageUl>
            </nav>
        </div>
    );
};

export default Pagination;