import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleLeft} from "@fortawesome/free-solid-svg-icons";


function PrevButton (props) {
    return (
        <Link to ="/study/write">

            <FontAwesomeIcon icon={faCircleLeft} />
            <span className="prev-next-btn">sefsef</span>
        </Link>
    );
}
export default PrevButton;
