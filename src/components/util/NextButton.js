import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleRight} from "@fortawesome/free-solid-svg-icons";


function PrevButton (props) {
    return (
        <Link to ="/study/write">

            <spn className="prev-next-btn">sefsef</spn>
            <FontAwesomeIcon icon={faCircleRight} />
        </Link>
    );
}
export default PrevButton;
