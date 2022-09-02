import React, {useRef, useState,useEffect} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../../redux/modules/auth";
import * as userActions from "../../redux/modules/user";
import {useHistory, useLocation} from "react-router-dom";
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


function Update(props) {
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
    const [thumbnail, setThumbnail] = useState("");


    const handleUpdateButton = () => {
        //Todo 제목, 카테고리, 본문 등 유효성 체크
        if (title == '') {
            alert("제목을 입력하세요");
            return;
        }
        if (categoryName == '') {
            alert("분류를 선택하세요");
            return;
        }

        if(window.confirm("저장하시겠습니까")){
            const data={
                "category"      : categoryName,
                "title"         : title,
                "body"          : editorRef.current?.getInstance().getHtml(),
                "thumbnail"     : thumbnail,
                "bodyPreView"   : editorRef.current?.getInstance().getMarkdown().substring(0,150),
                "writeTime"     : post.writeTime,
                "updateTime"    : moment().format("YYYY-MM-DDTHH:mm:sszz")
            }
            console.log(data)
            console.log(id)
            Content.putContent(data, id)
                .then((response)=>{
                    if(response.status==201){
                        window.location.replace("/")
                    }
                }).catch((e)=>{
                alert("수정에 실패하였습니다.");
            })
        }

    };
    const location = useLocation();
    const [post, setPost] = useState(0);
    const [loading, setLoading] = useState(false);
    const [updateUrl, setUpdateUrl] = useState([])
    const id = (location.state.id)
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            setLoading(true);
            Content.getSingleContent("java", id)
                .then((response) =>{
                    setTitle(response.data['title'])
                    setThumbnail(response.data['thumbnail'])
                    setCategoryName(response.data['category'])
                    setPost(response.data);
                    setUpdateUrl(response.data['_links']['update'])
                })
                .catch((error) => {
                    console.log('error',error)
                })
        };
        fetchData();
    }, []);

    return (
        <div className="width-1140px mar-auto-0 disp-flex height-100vh">


                <div className="title-div width-100per height-70p"></div>

                <form>
                    <div className="editor-title-container bac-color-white disp-flex">
                        <SimpleSelect categoryName={categoryName} setCategoryName={setCategoryName}/>
                        <input className="content-title-input text-indent-20p" value={title} placeholder="제목..." onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <input className="tag-input text-indent-20p" value={thumbnail} placeholder="#thumbnail..." onChange={(event) => setThumbnail(event.target.value)}/>
                    <div>

                        {post.body&&<Editor
                            initialValue={post.bodyHtml}
                            previewStyle="vertical"
                            height="600px"
                            initialEditType="markdown"
                            useCommandShortcut={true}
                            plugins={[[codeSyntaxHighlightPlugin, { hljs }], colorSyntaxPlugin]}
                            ref={editorRef}
                            hooks={{
                                addImageBlobHook: onUploadImage
                            }}

                        />}
                            <div className="disp-flex">
                                {updateUrl&&<div className="hover-btn roboto font-size-18px mar-l-20px mar-r-20px mar-top-30" onClick={handleUpdateButton} variant="contained">update</div>}
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
)(Update);