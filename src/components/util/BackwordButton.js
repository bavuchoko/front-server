
import React,{useState} from "react";
import {Button} from "@material-ui/core";


function BackwordButton (props) {
    return (
            <div onClick={() => {props.history.goBack();} }>
                <Button variant="contained">back</Button>
            </div>
    );
}
export default BackwordButton;
