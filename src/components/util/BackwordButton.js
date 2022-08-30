import React from "react";


function BackwordButton (props) {
    return (
            <div className="roboto font-size-18px" onClick={() => {props.history.goBack();} }>
                back
            </div>
    );
}
export default BackwordButton;
