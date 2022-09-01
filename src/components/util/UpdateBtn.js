
import React,{useState} from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenAlt} from "@fortawesome/free-solid-svg-icons";


function UpdateBtn ({category, id}=[]) {
    return (
        <Link className="font-size-16px " to={{
            pathname: '/study/update' ,
            state: {
                category: category,
                id: id
            },
        }} >
           수정
        </Link>
    );
}
export default UpdateBtn;
