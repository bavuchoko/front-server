
import React,{useState} from "react";
import {Button} from "@material-ui/core";


function SaveButton (props) {
    return (
            <div onClick={() => {props.history.goBack();} }>
                <Button variant="contained">save</Button>
            </div>
    );
}
export default SaveButton;
