/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <nav className="border-1-s-g">
                <div className="width-100per height-55p bac-color-293462 color-FEB139 border-bot-1p-w tc-lh60-fs15">Members</div>
                    <div>
                        <ul className="noulstyle text-indent-20p">
                            <li className="items-center li-to-small-down-style">
                                <Link
                                    className={
                                        (window.location.href.indexOf("/admin/dashboard") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/admin/dashboard"
                                >

                                    로그인
                                </Link>
                            </li>

                            {/*<li className="items-center li-to-small-down-style">*/}
                            {/*    <Link*/}
                            {/*        className={*/}
                            {/*            (window.location.href.indexOf("/admin/settings") !== -1*/}
                            {/*                ? "text-lightBlue-500 hover:text-lightBlue-600"*/}
                            {/*                : "text-blueGray-700 hover:text-blueGray-500")*/}
                            {/*        }*/}
                            {/*        to="/admin/settings"*/}
                            {/*    >*/}


                            {/*    </Link>*/}
                            {/*</li>*/}

                            {/*<li className="items-center li-to-small-down-style">*/}
                            {/*    <Link*/}
                            {/*        className={*/}
                            {/*            (window.location.href.indexOf("/admin/tables") !== -1*/}
                            {/*                ? "text-lightBlue-500 hover:text-lightBlue-600"*/}
                            {/*                : "text-blueGray-700 hover:text-blueGray-500")*/}
                            {/*        }*/}
                            {/*        to="/admin/tables"*/}
                            {/*    >*/}
                            {/*        */}
                            {/*    </Link>*/}
                            {/*</li>*/}
                        </ul>

                    </div>

            </nav>
        </>
    );
}
