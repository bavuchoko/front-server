
import React,{useState} from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenAlt} from "@fortawesome/free-solid-svg-icons";


function DeleteBtn (props) {
    return (
        <Link className="font-size-16px " to ="/study/write" >
           삭제
        </Link>
    );
}
export default DeleteBtn;
