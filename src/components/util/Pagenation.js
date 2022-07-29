
import x from "../../assets/image/x.png";
import magnifierWhite from "../../assets/image/magnifier-white.png";
import React,{useState} from "react";


function Pagenation () {

    const [visible, setVisible] = useState(false);
    const clickedToggle = () => {
        setVisible(!visible);

    };
    const magnifierIcon="magnifierIcon";
    const roateXIcon= "roateXIcon";
    const show="search-bar show";
    const liner="search-bar liner";
    return (

        <div className="top-pagenation-div">
            <div className="mar-auto-0 width-350p height-40p bac-color-gray-blue">
                PAGENATION
            </div>
        </div>

    );

}
export default Pagenation;
