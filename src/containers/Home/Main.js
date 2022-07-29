import React, {Component, useState, useEffect} from 'react';
import HomeSideMenu from "../../components/sideMenu/HomeSideMenu";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../../redux/modules/auth";
import * as userActions from "../../redux/modules/user";
import calendar from '../../assets/image/calendar.png';
import Posts from "../../components/content/Posts";
import Pagination from "../../components/content/Pagination";
import axios from "axios";

function Main() {




        const [posts, setPosts] = useState([]);
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

        return (
            <div className="width-1250px mar-auto-0 disp-flex height-100vh">
                <div className="width-350p">
                    <HomeSideMenu />
                </div>

                <div className="width-100per-350p mar-auto-0 bac-color-white">
                    <p className="text-indent-20p main-category">HOME</p>
                    <div className="article-container">
                        <div className="article-banner bac-color-D61C4E"></div>
                        <div className="date-selector-div" >
                            <img className="calendar-fas" src={calendar}/>
                            <span  className="calendar-span">2002 - 02</span>
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