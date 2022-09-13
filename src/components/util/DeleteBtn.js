
import React,{useState} from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenAlt} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Content from "../../lib/api/Content";


function DeleteBtn (props) {
    const category = props.category;
    const id = props.id;

    const handleDeleteButton = () => {
        //Todo 제목, 카테고리, 본문 등 유효성 체크
        if(window.confirm("삭제하시겠습니까")){
            Content.deleteContent(category, id)
                .then((response)=>{
                    if(response.status==201){
                        window.location.replace("/")
                    }
                }).catch((e)=>{
                alert("삭제에 실패하였습니다.");
            })
        }

    };

    return (
        <span className="font-size-16px hover-btn dsip-inlineblock mar-l-20px margin-left-20p" onClick={handleDeleteButton} >
           삭제
        </span>
    );
}
export default DeleteBtn;
