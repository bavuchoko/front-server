/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <nav className="border-1-s-g">
                <div className="width-100per height-110p bac-color-293462 color-FEB139 tc-lh100-fs22">두루마리</div>
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

                                    JAVA
                                </Link>
                            </li>

                            <li className="items-center li-to-small-down-style">
                                <Link
                                    className={
                                        (window.location.href.indexOf("/admin/settings") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/admin/settings"
                                >

                                   Spring boot
                                </Link>
                            </li>

                            <li className="items-center li-to-small-down-style">
                                <Link
                                    className={
                                        (window.location.href.indexOf("/admin/tables") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/admin/tables"
                                >
                                    Data Base
                                </Link>
                            </li>
                        </ul>

                    </div>

            </nav>
        </>
    );
}
