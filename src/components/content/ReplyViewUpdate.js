import React, {useState} from 'react';
import 'highlight.js/styles/github.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import unknown from '../../assets/image/unknown.png';
import moment from "moment";
import Content from "../../lib/api/Content";
import writerD from "../../assets/image/writer-default.png";

const ReplyWriteForm = ({ reply, category, id, removeReply, checkClicked, isThisModify, updateReplies}) => {

    const [isSelected, setIsSelected] = useState(isThisModify);
    const [replyContent, setReplyContent] = useState(false);



    const modify_reply =(rid)=> {
        if (reply == '') {
            alert("댓글 내용을 입력하세요");
            return;
        }
        if (window.confirm("수정 하시겠습니까")) {
            const data = {
                "body": replyContent,
                "writeTime":reply.writeTime.substring(0,10)+"T"+reply.writeTime.substring(11,19),
                "updateTime": moment().format("YYYY-MM-DDTHH:mm:sszz")
            }
            Content.updateReply(category,id, rid, data)
                .then((response)=>{
                    if(response.status==200){
                        updateReplies(response.data['_embedded']['repliesResourcesList'])
                        setIsSelected(false);
                        alert("수정하였습니다.");
                    }
                }).catch((e)=>{
                alert("수정에 실패하였습니다.");
            })

        }

    }
    const selector =()=>{
        setIsSelected(true);
        setReplyContent(reply.body);
    }

    const cancel_modify =(rid)=>{
        setIsSelected(false);
        setReplyContent(reply.body);
    }



    const delete_reply =(rid)=>{
        if (window.confirm("삭제 하시겠습니까")) {
            Content.deleteReply(category,id, rid)
                .then((response)=>{
                    if(response.status==204){
                        alert("삭제되었습니다.");
                        removeReply(rid);
                    }
                }).catch((e)=>{
                alert("삭제에 실패하였습니다.");
            })
        }
    }

    if(!isThisModify || !isSelected) {
        return (
            <>
                <div className="width-100per replies-body-hedaer">
                    <div className="width-60p height-60p float-left margin-right-15p round replier-write-pic">
                        <img src={reply._links == null ? unknown : writerD}></img>
                    </div>
                    <p className="replier-writer-nickname float-left mar-top-15p">{reply.account.nickname}</p>
                    {reply._links && <span className="dsip-inlineblock padding-rl-10px underline3"
                                           onClick={() =>{
                                               selector(reply.id);
                                               checkClicked( reply.id );
                                           }}>수정</span>}
                    {reply._links && <span className="dsip-inlineblock margin-right-10p padding-rl-10px underline3"
                                           onClick={() => delete_reply(reply.id)}>삭제</span>}

                    <span className="dsip-inlineblock float-right">{reply.writeTime.substring(2, 16)}</span>
                </div>
                <div className="replies-body-content width-100per-100p">
                    <p className="width-100per">
                        {reply.body}
                    </p>
                </div>
                <div className="replies-operator dsip-inlineblock float-right mar-l-10px">
                </div>
            </>
        );
    }
    else{
        return (
            <>
                <div className="width-100per replies-body-hedaer">
                    <div className="width-60p height-60p float-left margin-right-15p round replier-write-pic">
                        <img src={reply._links == null ? unknown : writerD}></img>
                    </div>
                    <p className="replier-writer-nickname float-left mar-top-15p">{reply.account.nickname}</p>
                    <span className="dsip-inlineblock float-right">{reply.writeTime.substring(2, 16)}</span>
                    {reply._links && <span className="dsip-inlineblock padding-rl-10px reply-modify-btn float-right"
                                           onClick={() => modify_reply(reply.id)}>저장</span>}
                    {reply._links && <span className="dsip-inlineblock margin-right-10p padding-rl-10px underline3 float-right"
                                           onClick={() => cancel_modify(reply.id)}>취소</span>}

                </div>
                <div className="replies-body-content width-100per-100p">
                    <textarea className="repliy-area"  placeholder="내용을 입력하세요" value={replyContent}  onChange={(event) => setReplyContent(event.target.value)}></textarea>
                </div>
                <div className="replies-operator dsip-inlineblock float-right mar-l-10px">
                </div>
            </>
        );
    }
}


export default ReplyWriteForm