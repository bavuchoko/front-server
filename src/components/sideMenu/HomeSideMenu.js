/*eslint-disable*/
import React from "react";
import Inputer from "../util/Inputer";
import SideCategoryLink from "../util/SideCategoryLink";
import UpperArrow from "../util/UpperArrow";
import {Link} from "react-router-dom";


const HomeSideMenu = ({ hits, loading }) => {

    return (
        <>
            <nav className="height-100per bac-color-grey border-1-s-g">
                <div className="width-100per height-55p bac-color-FEB139 color-FEB139 tc-lh60-fs15">
                   <Inputer/>
                </div>
                <div  className="">

                    <p className="text-indent-20p p font-size-15px ">Most hit</p>
                    <ul className="noulstyle text-indent-20p">

                    {loading && <div> loading... </div>}
                {hits.map((hit) => (

                    <li key={hit.id}  className="items-center li-to-small-down-style height-100per">
                        <Link to="/admin/dashboard">
                            <div className="recent-container disp-flex">
                                <div className="recent-img bac-color-FEB139">

                                </div>
                                <div className="recent-content-box width-228p">
                                    <p className="recent-content-p">{hit.title}</p>
                                    <p className="recent-content-p2">{hit.body}</p>
                                    <p className="recent-content-p3">{hit.writeTime}</p>
                                </div>
                            </div>
                        </Link>
                        <div className="liner-padding-rl-20px"></div>
                    </li>
                ))}
                    </ul>

                </div>
                   <SideCategoryLink/>
                   <UpperArrow/>
            </nav>

        </>
    );
}
export default HomeSideMenu;