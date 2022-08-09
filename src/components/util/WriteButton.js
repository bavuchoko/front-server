
import React,{useState} from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenAlt} from "@fortawesome/free-solid-svg-icons";


function WriteButton (props) {
    return (
        <Link to ="/study/write">
            <Button variant="contained" className="tpye_btn" >
                <FontAwesomeIcon icon={faPenAlt} />
            </Button>
        </Link>
    );
}
export default WriteButton;
