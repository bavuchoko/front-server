import React, {useRef, useState} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../../redux/modules/auth";
import * as userActions from "../../redux/modules/user";
import {useHistory} from "react-router-dom";
import 'codemirror/lib/codemirror.css'
import 'highlight.js/styles/github.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import fileService from '../../lib/api/fileService'

import SimpleSelect from "../../components/util/SimpleSelect";

import {Editor} from "@toast-ui/react-editor";


import colorSyntaxPlugin from "@toast-ui/editor-plugin-color-syntax";
import hljs from "highlight.js";
import codeSyntaxHighlightPlugin from "@toast-ui/editor-plugin-code-syntax-highlight";
import Content from "../../lib/api/Content";
import moment from 'moment';
import 'moment/locale/ko';


function WriteContainer(props) {
    let isLoggedIn = props.isLoggedIn;
    isLoggedIn = true;
    let history =useHistory();
    const editorRef =useRef();

    const onUploadImage = async (blob, callback) => {
        const url = await fileService.imageUpload(blob);
        callback("https://pjs.or.kr:8080"+url, 'alt text');
        return false;
    };
    const [categoryName, setCategoryName] = useState("");
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");


    const handleRegisterButton = () => {
        //Todo 제목, 카테고리, 본문 등 유효성 체크
        if (title == '') {
            alert("제목을 입력하세요");
            return;
        }
        if (categoryName == '') {
            alert("분류를 선택하세요");
            return;
        }

        console.log(categoryName)
        if(window.confirm("등록하시겠습니까")){
            const data={
                "category"      : categoryName,
                "title"         : title,
                "body"          : editorRef.current?.getInstance().getHtml(),
                "tag"           : tag,
                "bodyHtml"   : editorRef.current?.getInstance().getMarkdown(),
                "writeTime"     : moment().format("YYYY-MM-DDTHH:mm:sszz")
            }
            Content.postContent(categoryName, data)
                .then((response)=>{
                    if(response.status==201){
                        window.location.replace("/")
                    }
                }).catch((e)=>{
                alert("등록에 실패하였습니다.");
            })
        }

    };

    return (
        <div className="width-1140px mar-auto-0 disp-flex height-100vh">

                <div className="title-div width-7per height-70p"></div>

                <form>
            <div className="tc-spacer2"> </div>
                    <div className="editor-title-container bac-color-white disp-flex">
                        <SimpleSelect  setCategoryName={setCategoryName}/>
                        <input className="content-title-input text-indent-20p" placeholder="제목..." onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <input className="tag-input text-indent-20p" placeholder="#thumbnail..." onChange={(event) => setTag(event.target.value)}/>
                    <div>

                        <Editor

                            initialValue=""
                            previewStyle="vertical"
                            height="600px"
                            initialEditType="markdown"
                            useCommandShortcut={true}
                            plugins={[[codeSyntaxHighlightPlugin, { hljs }], colorSyntaxPlugin]}
                            ref={editorRef}
                            hooks={{
                                addImageBlobHook: onUploadImage
                            }}

                        />
                            <div className="disp-flex">
                                    <div className="hover-btn roboto font-size-18px mar-l-20px mar-r-20px mar-top-30" onClick={handleRegisterButton} variant="contained">save</div>
                                    <div className="hover-btn roboto font-size-18px mar-l-20px mar-top-30" onClick={() => {props.history.goBack();} }>back</div>
                            </div>
                    </div>
                </form>

        </div>
    );
}


export default connect(
    (state) => ({
        form: state.auth.getIn(['register', 'form']),
        error: state.auth.getIn(['register', 'error']),
        exists: state.auth.getIn(['register', 'exists']),
        result: state.auth.get('result')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(WriteContainer);