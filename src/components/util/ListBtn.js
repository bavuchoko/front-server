
import React,{useState} from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenAlt} from "@fortawesome/free-solid-svg-icons";


function ListBtn (props) {
    const category= props.category;
    return (
        <Link className="font-size-16px"  to={{
            pathname: '/study/list' ,
            state: {
                category:category
            },}} >
           목록
        </Link>
    );
}
export default ListBtn;
