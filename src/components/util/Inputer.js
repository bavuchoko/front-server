
import magnifier2 from "../../assets/image/magnifier-white.png";
import React from "react";


function Inputer () {


    return (

        <div className="width-100per height-55p bac-color-FEB139 color-FEB139 tc-lh60-fs15">
            <input className="search-bar" placeholder="검색..."/>
            <div className="float-right height-100per width-70p"><img className="hover-btn" id="magnifier_img" src={magnifier2} /></div>
        </div>
);

}
export default Inputer;
