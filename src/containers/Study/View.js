import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import Content from "../../lib/api/Content";
import {Viewer} from '@toast-ui/react-editor';
import 'highlight.js/styles/github.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import codeSyntaxHighlightPlugin from "@toast-ui/editor-plugin-code-syntax-highlight";
import hljs from "highlight.js";
import colorSyntaxPlugin from "@toast-ui/editor-plugin-color-syntax";
import UpdateBtn from "../../components/util/UpdateBtn";
import DeleteBtn from "../../components/util/DeleteBtn";
import ListBtn from "../../components/util/ListBtn";
import Replier from "../../components/content/Replier";
import storage from "../../lib/storage";
import WriteButton from "../../components/util/WriteButton";
import unknown from "../../assets/image/unknown.png";

function View() {
    const location = useLocation();
    const id = (location.state.data)
    const category = (location.state.category)
    const [hits, setHits] = useState([]);
    const [post, setPost] = useState(0);
    const [loading, setLoading] = useState(false);
    const [replies, setReplies] = useState(false);
    const [updateUrl, setUpdateUrl] = useState(undefined)
    const loggedInfo = storage.get('loggedInfo');

    const alrim =()=>{
        alert("아직 개발중입니다.")
    }

    let isLoggedIn = loggedInfo? true : false;
    const replier = isLoggedIn?  <Replier nickname={loggedInfo.nickname}/> : null;
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            setLoading(true);
            Content.getSingleContent(category, id)
                .then((response) =>{
                    console.log(response.data)
                    setPost(response.data);
                    setUpdateUrl(response.data['_links']['update'])
                    setReplies(response.data['replies'])
                })
                .catch((error) => {
                    console.log('error',error)
                })
            Content.getContentCategoryRecent(category)
                .then((response) =>{
                    setHits(response.data['_embedded']['contentList']);
                })
                .catch((error) => {
                    console.log('error',error)
                    setLoading(false);
                })
            setLoading(false);
        };
        fetchData();
    }, []);


    return (
        <div className="width-1140px mar-auto-0 disp-flex height-100vh">


            <div className="width-100per-20p mar-auto-0 bac-color-white">

                <div className="updatebtn-div text-align-right">
                {updateUrl&&<UpdateBtn category={post.category} id={post.id} />}
                {updateUrl&&<DeleteBtn category={post.category} id={post.id}/>}
                <ListBtn category={post.category}/>
                </div>
                        <span className="disp-block text-align-right mar-r-20px">{post.writeTime}</span>
                <div className="article-container">
                    <div className="article-title ">
                        <p>{post.title}</p>
                    </div>

                    <div className="article-body">
                        <div className="noulstyle article-card-body">


                            {post.body&&< Viewer
                                plugins={[[codeSyntaxHighlightPlugin, { hljs }], colorSyntaxPlugin]}
                                initialValue={post.body}
                            />}
                        </div>
                    </div>
                    <div className="article-footer">
                    </div>
                    <div className="article-replier">
                        <div className="replier-head">0 개의 댓글</div>
                        {replier}
                        <div className="replies-container">
                            {replies&&replies.map((reply) => (
                            <div className="replies-body hover-btn " key={reply.id}>
                                <div className="width-100per replies-body-hedaer">
                                    <div className="width-60p height-60p bac-color-FEB139 float-left margin-right-10p round replier-write-pic">
                                        <img  src={unknown}></img>
                                    </div>
                                    <p className="replier-writer-nickname float-left mar-top-10p">{reply.account.nickname}</p>
                                    <Link to="/" className="dsip-inlineblock margin-right-10p padding-rl-10px underline3" onClick={alrim}>삭제</Link>
                                    <Link to="/" className="dsip-inlineblock padding-rl-10px underline3"  onClick={alrim}>수정</Link>
                                </div>
                                <div  className="replies-body-content width-100per-100p">
                                    <p className="width-100per">
                                        {reply.body}
                                    </p>
                                </div>
                                <div className="replies-operator dsip-inlineblock float-right mar-l-10px">
                                </div>
                            </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default View