
import x from "../../assets/image/x.png";
import magnifierWhite from "../../assets/image/magnifier-white.png";
import React,{useState} from "react";


function Inputer () {

    const [visible, setVisible] = useState(false);
    const clickedToggle = () => {
       setVisible(!visible);

    };
    const magnifierIcon="magnifierIcon";
    const roateXIcon= "roateXIcon";
    const show="search-bar show";
    const liner="search-bar liner";
    return (

        <div className="width-100per height-55p bac-color-FEB139 color-FEB139 tc-lh60-fs15">
            <input className={visible ? show :liner}  placeholder=". . ." />
            <div className="float-right height-100per width-70p"  onClick={clickedToggle}><img className="" id="magnifier_img" src={ visible ? x :magnifierWhite }  /></div>
        </div>

);

}
export default Inputer;
