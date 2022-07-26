import React, {useState} from 'react';
import {Link} from "react-router-dom";
import 'highlight.js/styles/github.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import unknown from '../../assets/image/unknown.png';
import moment from "moment";
import Content from "../../lib/api/Content";

const ReplyWriteForm = ({nickname, category, id, addReply}=[]) => {
    const [reply, setReply] = useState([]);

    const commmit_reply =()=> {
        if (reply == '') {
            alert("댓글 내용을 입력하세요");
            return;
        }
        if (window.confirm("등록하시겠습니까")) {
            const data = {
                "body": reply,
                "writeTime": moment().format("YYYY-MM-DDTHH:mm:sszz")
            }
            Content.addReply(category,id, data)
                .then((response)=>{
                    if(response.status==200){
                        alert("등록하였습니다.");
                        addReply(response.data)
                        // window.location.reload();
                    }
                }).catch((e)=>{
                alert("등록에 실패하였습니다.");
            })

        }

    }

    return (

        <div className="width-100per mar-auto-0 replier-div">

            <div className="repiler-nick-name float-left">{nickname}</div>
            <div className="float-right reply-commit-btn hover-btn" onClick={commmit_reply}>commit</div>
         
            <textarea className="repliy-area"  placeholder="내용을 입력하세요" onChange={(event) => setReply(event.target.value)}></textarea>
        </div>


    );
}


export default ReplyWriteForm