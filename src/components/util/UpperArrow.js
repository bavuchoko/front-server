import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesUp} from "@fortawesome/free-solid-svg-icons";

function UpperArrow () {
    const goTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const [visible, setVisible] = useState(false);
    const clickedToggle = () => {
        setVisible(!visible);

    };
    const magnifierIcon="magnifierIcon";
    const roateXIcon= "roateXIcon";
    const show="search-bar show";
    const liner="search-bar liner";
    return (

        <div className="upper-arrow fixed" onClick={goTop}>

            <FontAwesomeIcon icon={faAnglesUp} />
        </div>

    );

}
export default UpperArrow;
