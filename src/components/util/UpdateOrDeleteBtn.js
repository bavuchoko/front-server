import React from "react";
import {Link} from "react-router-dom";


function UpdateOrDeleteBtn () {
    return (
        <>
            <Link to ="/study/update">
                <div className="article-title-div">수정</div>
            </Link>
            <Link to ="/study/delete">
                <div className="article-title-div">삭제</div>
            </Link>
        </>
    );
}
export default UpdateOrDeleteBtn;