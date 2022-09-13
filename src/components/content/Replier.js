import React from 'react';
import {Link} from "react-router-dom";
import 'highlight.js/styles/github.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import unknown from '../../assets/image/unknown.png';

const Replier = ({ nickname }=[]) => {


    const alrim =()=>{
        alert("아직 개발중입니다.")
    }
    return (

        <div className="width-100per mar-auto-0 replier-div">

            <div className="repiler-nick-name float-left">{nickname}</div>
            <div className="float-right reply-commit-btn" onClick={alrim}>commit</div>
            <textarea className="repliy-area"></textarea>
        </div>


    );
}


export default Replier