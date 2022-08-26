import React, {useEffect, useState} from 'react';
import HomeSideMenu from "../../components/sideMenu/HomeSideMenu";
import {Link,useLocation} from "react-router-dom";
import PrevButton from "../../components/util/PrevButton";
import NextButton from "../../components/util/NextButton";
import Content from "../../lib/api/Content";
import { Viewer } from '@toast-ui/react-editor';

function View() {
    const location = useLocation();
    const id = (location.state.data)
    const [hits, setHits] = useState([]);
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            Content.getContentCategoryRecent("java")
                .then((response) =>{
                    setHits(response.data['_embedded']['contentList']);
                })
                .catch((error) => {
                    console.log('error',error)
                    setLoading(false);
                })
            setLoading(false);



            Content.getSingleContent("java",id)
                .then((response) =>{
                    console.log(response.data)
                    setPost(response.data)
                })
                .catch((error) => {
                    console.log('error',error)
                    setLoading(false);
                })

            setLoading(false);
        };
        fetchData();
    }, []);

    const hitPost = (hits) => {

        let hitposts = 0;
        hitposts = hits.slice(0, 4);
        return hitposts;
    };

    return (
        <div className="width-1140px mar-auto-0 disp-flex height-100vh">
            <div className="width-340p">
                <HomeSideMenu hits={hits} loading={loading}/>
            </div>

            <div className="width-800p mar-auto-0 bac-color-white">
                <p className="text-indent-20p main-category padding-rl-40p">Java</p>

                <div className="article-container">

                    <div className="article-banner view-Header">
                    </div>

                    <div className="article-title ">
                        <p>{post.title}</p>


                        <span>{post.writeTime}</span>
                    </div>

                    <div className="article-body">
                        <div className="noulstyle padding-tr-40p article-card-body">

                            <Viewer initialValue={post.body} />
                        </div>
                    </div>
                    <div className="article-footer">
                        <ul className="noulstyle">
                            <li className="disp-block float-left mar-l-20px">
                                <PrevButton/>
                            </li>
                            <li  className="disp-block float-right mar-r-20px">
                                <NextButton />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
}


export default View