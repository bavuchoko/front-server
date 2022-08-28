import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleRight} from "@fortawesome/free-solid-svg-icons";


function PrevButton (props) {
    return (
        <Link to ="/study/write">

            <span className="prev-next-btn">sefsef</span>
            <FontAwesomeIcon icon={faCircleRight} />
        </Link>
    );
}
export default PrevButton;
