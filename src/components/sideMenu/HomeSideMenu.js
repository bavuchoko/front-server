/*eslint-disable*/
import React from "react";
import Inputer from "../util/Inputer";
import SiderContent from "../util/SiderContent";
import SideCategoryLink from "../util/SideCategoryLink";
import UpperArrow from "../util/UpperArrow";

export default function Sidebar() {
    return (
        <>
            <nav className="height-100per bac-color-grey border-1-s-g">
                <div className="width-100per height-55p bac-color-FEB139 color-FEB139 tc-lh60-fs15">
                   <Inputer/>
                </div>
                   <SiderContent/>
                   <SideCategoryLink/>
                   <UpperArrow/>
            </nav>

        </>
    );
}
