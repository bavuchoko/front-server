import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
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

function View() {
    const location = useLocation();
    const id = (location.state.data)
    const category = (location.state.category)
    const [hits, setHits] = useState([]);
    const [post, setPost] = useState(0);
    const [loading, setLoading] = useState(false);
    const [updateUrl, setUpdateUrl] = useState(undefined)


    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            setLoading(true);
            Content.getSingleContent(category, id)
                .then((response) =>{
                    setPost(response.data);
                    setUpdateUrl(response.data['_links']['update'])
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


            <div className="width-100per mar-auto-0 bac-color-white">

                <div className="updatebtn-div text-align-right">
                {updateUrl&&<UpdateBtn category={post.category} id={post.id} />}
                {updateUrl&&<DeleteBtn category={post.category} id={post.id}/>}
                <ListBtn category={post.category}/>
                </div>
                <div className="article-container">
                    <div className="article-title ">
                        <span>{post.writeTime}</span>
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
                </div>
            </div>


        </div>
    );
}


export default View