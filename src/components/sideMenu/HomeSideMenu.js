/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import magnifier2 from "../../assets/image/magnifier-white.png";

export default function Sidebar() {
    return (
        <>
            <nav className="height-100per bac-color-grey border-1-s-g">
                <div className="width-100per height-55p bac-color-FEB139 color-FEB139 tc-lh60-fs15">
                    <div className="float-right height-100per width-70p"><img className="hover-btn" id="magnifier_img" src={magnifier2} /></div>
                </div>
                    <div  className="">

                        <p className="text-indent-20p p">RECENT </p>
                        <ul className="noulstyle text-indent-20p">

                            <li className="items-center li-to-small-down-style height-100per">
                                <Link to="/admin/dashboard">
                                    <div className="recent-container disp-flex">
                                       <div className="recent-img bac-color-2B2B28">

                                       </div>
                                        <div className="recent-content-box width-228p">
                                            <p className="recent-content-p">stream</p>
                                            <p className="recent-content-p2">Collection 과 Stream 차이 & 함수 map, filter, sort... </p>
                                            <p className="recent-content-p3">2022-07-03</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="liner-padding-rl-20px"></div>
                            </li>

                            <li className="items-center li-to-small-down-style height-100per">
                                <Link to="/admin/dashboard">
                                    <div className="recent-container disp-flex">
                                        <div className="recent-img bac-color-2B2B28">

                                        </div>
                                        <div className="recent-content-box width-228p">
                                            <p className="recent-content-p">stream</p>
                                            <p className="recent-content-p2">Collection 과 Stream 차이 & 함수 map, filter, sort...블라블라예 무궁화가 날날날 라라라라  죽여불라 개빡쳐 벼리쥬? </p>
                                            <p className="recent-content-p3">2022-07-03</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="liner-padding-rl-20px"></div>
                            </li>

                            <li className="items-center li-to-small-down-style height-100per">
                                <Link to="/admin/dashboard">
                                    <div className="recent-container disp-flex">
                                        <div className="recent-img bac-color-2B2B28">

                                        </div>
                                        <div className="recent-content-box width-228p">
                                            <p className="recent-content-p">stream</p>
                                            <p className="recent-content-p2">Collection 과 Stream 차이 & 함수 map, filter, sort... </p>
                                            <p className="recent-content-p3">2022-07-03</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="liner-padding-rl-20px"></div>
                            </li>
                        </ul>

                    </div>

            </nav>
        </>
    );
}
