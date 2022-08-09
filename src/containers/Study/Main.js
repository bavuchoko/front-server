import React, {useEffect, useState} from 'react';
import HomeSideMenu from "../../components/sideMenu/HomeSideMenu";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../../redux/modules/auth";
import * as userActions from "../../redux/modules/user";
import calendar from '../../assets/image/calendar.png';
import Posts from "../../components/content/Posts";
import Pagination from "../../components/content/Pagination";
import axios from "axios";
import {Link} from "react-router-dom";
import storage from "../../lib/storage";
import WriteButton from "../../components/util/WriteButton";

function Main() {

    const loggedInfo = storage.get('loggedInfo');
    let isLoggedIn = loggedInfo? true : false;

    const writeBtn = isLoggedIn?  <WriteButton/> : null;

        const [posts, setPosts] = useState([]);
        const [hits, setHits] = useState([]);
        const [loading, setLoading] = useState(false);
        const [currentPage, setCurrentPage] = useState(1);
        const [postsPerPage, setPostsPerPage] = useState(8);

        useEffect(() => {
            const fetchData = async () => {
                setLoading(true);
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                setPosts(response.data);

                const response2 = await axios.get(
                    "https://jsonplaceholder.typicode.com/comments"
                );
                setHits(response2.data);
                setLoading(false);
            };
            fetchData();
        }, []);


        /* 새로 추가한 부분 */
        const indexOfLast = currentPage * postsPerPage;
        const indexOfFirst = indexOfLast - postsPerPage;
        const currentPosts = (posts) => {
            let currentPosts = 0;
            currentPosts = posts.slice(indexOfFirst, indexOfLast);
            return currentPosts;
        };
    const hitPost = (hits) => {

        let hitposts = 0;
        hitposts = hits.slice(0, 4);
        return hitposts;
    };

        return (
            <div className="width-1140px mar-auto-0 disp-flex height-100vh">
                <div className="width-340p">
                    <HomeSideMenu hits={hitPost(hits)} loading={loading}/>
                </div>

                <div className="width-800p mar-auto-0 bac-color-white">
                    <p className="text-indent-20p main-category padding-rl-40p">Stduy</p>

                    <div className="article-container">

                        <div className="article-banner bac-color-155674">
                            <ul className="noulstyle disp-flex font-color-white margin-left-30p">
                                <li className="disp-block padding-right-30p padding-left-30p hover-btn hover-color-F5FFAE border-1-s-g-toR">
                                    Java
                                </li>
                                <li className="disp-block padding-right-30p padding-left-30p hover-btn hover-color-F5FFAE border-1-s-g-toR">
                                    Spring
                                </li>
                                <li className="disp-block padding-right-30p padding-left-30p hover-btn hover-color-F5FFAE border-1-s-g-toR">
                                    DataBase
                                </li>
                                <li className="disp-block padding-right-30p padding-left-30p hover-btn hover-color-F5FFAE">
                                    Ubuntu
                                </li>

                            </ul>
                        </div>


                        <div className="date-selector-div" >
                            <img className="calendar-fas" src={calendar}/>
                            <span  className="calendar-span">2002 - 02</span>
                            {writeBtn}
                        </div>

                        <div className="article-body">
                            <div className="noulstyle padding-tr-40p article-card-body">
                                <Posts posts={currentPosts(posts)} loading={loading}></Posts>
                            </div>
                        </div>
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={posts.length}
                            paginate={setCurrentPage}
                        ></Pagination>
                    </div>
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
)(Main);