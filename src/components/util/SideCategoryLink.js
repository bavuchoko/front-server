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
                        Board
                    </Link>
                </li>
                <li className="roboto link-to-cateogry">
                    <FontAwesomeIcon icon={faPlay}  className="fas-play"/>
                    <Link className="roboto" to="/">
                        Api/Docs
                    </Link>
                </li>
                <li className="roboto link-to-cateogry">
                    <FontAwesomeIcon icon={faPlay}  className="fas-play"/>
                    <Link className="roboto" to="/">
                        Test
                    </Link>
                </li>
                <li className="roboto link-to-cateogry">
                    <FontAwesomeIcon icon={faPlay}  className="fas-play"/>
                    <Link className="roboto" to="/">
                        Etc
                    </Link>
                </li>
            </ul>
        </div>

    );

}
export default SideCategoryLink;
