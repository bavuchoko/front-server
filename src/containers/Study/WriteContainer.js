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
import BackwordButton from "../../components/util/BackwordButton";
import SaveButton from "../../components/util/SaveButton";





import 'codemirror/lib/codemirror.css';
import 'highlight.js/styles/github.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from "@toast-ui/react-editor";


import "codemirror/lib/codemirror.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "highlight.js/styles/github.css";

import colorSyntaxPlugin from "@toast-ui/editor-plugin-color-syntax";
import hljs from "highlight.js";
import codeSyntaxHighlightPlugin from "@toast-ui/editor-plugin-code-syntax-highlight";
import {Button} from "@material-ui/core";
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
        callback("http://localhost:8080"+url, 'alt text');
        return false;
    };
    const [categoryName, setCategoryName] = useState("");
    const [title, setTitle] = useState("");


    const handleRegisterButton = () => {
        // console.log(editorRef.current?.getInstance().getMarkdown());

        if(window.confirm("등록하시겠습니까")){
            const data={
                "category"  : categoryName,
                "title"     : title,
                "body"      : editorRef.current?.getInstance().getHtml(),
                "bodyPreView"      : editorRef.current?.getInstance().getMarkdown().substring(0,150),
                "writeTime" : moment().format("YYYY-MM-DDTHH:mm:sszz")
            }
            try {
                Content.postContent(categoryName, data);
                window.location.replace("/")
            }catch (e){}
        }

    };

    return (
        <div className="width-1140px mar-auto-0 disp-flex height-100vh">
            <div className="width-1168px mar-auto-0 bac-color-white padding-rl-40p bac-color-temp">

                <div className="title-div width-100per height-70p"></div>
                <div className="editor-header-container mar-top-30">
                </div>
                <form>
                    <div className="editor-title-container bac-color-white disp-flex">
                        <SimpleSelect  setCategoryName={setCategoryName}/>

                        <input className="content-title-input text-indent-20p" onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <div>

                        <Editor

                            initialValue="hello react editor world!"
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

                        <Button onClick={handleRegisterButton} variant="contained">save</Button>
                        <BackwordButton history={ history }>
                        </BackwordButton>


                    </div>
                </form>
            </div>
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