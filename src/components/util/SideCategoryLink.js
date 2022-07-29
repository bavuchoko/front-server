import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function SideCategoryLink () {


    return (

        <div className="width-100per padding-rl-20p " >
            <span className="roboto link-category">Category</span>
            <ul className="noulstyle width-100per-40p">
                <li  className="roboto link-to-cateogry">
                    <FontAwesomeIcon icon={faPlay} className="fas-play"/>
                    <Link className="roboto" to="/">
                        STUDY
                    </Link>
                </li>
                <li className="roboto link-to-cateogry">
                    <FontAwesomeIcon icon={faPlay}  className="fas-play"/>
                    <Link className="roboto" to="/">
                        API
                    </Link>
                </li>
                <li className="roboto link-to-cateogry">
                    <FontAwesomeIcon icon={faPlay}  className="fas-play"/>
                    <Link className="roboto" to="/">
                        TEST
                    </Link>
                </li>
                <li className="roboto link-to-cateogry">
                    <FontAwesomeIcon icon={faPlay}  className="fas-play"/>
                    <Link className="roboto" to="/">
                        TEC
                    </Link>
                </li>
            </ul>
        </div>

    );

}
export default SideCategoryLink;
