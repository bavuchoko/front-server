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


function Main() {

    const loggedInfo = storage.get('loggedInfo');
    let isLoggedIn = loggedInfo? true : false;

    const writeBtn = isLoggedIn?  <Link className="roboto write_btn float-right" to="/study/write">WRITE</Link> : null;

    const [posts, setPosts] = useState([]);
    const [hits, setHits] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response2 = await axios.get(
                "https://jsonplaceholder.typicode.com/comments"
            );
            setHits(response2.data);
            setLoading(false);
        };
        fetchData();
    }, []);


    /* 새로 추가한 부분 */

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
                <p className="text-indent-20p main-category padding-rl-40p">2022-01-01 - 11:22:33</p>

                <div className="article-container">

                    <div className="article-banner view-Header">
                    </div>

                    <div className="article-title ">
                        <p>조 React 리덕스(Redux) Immutable.js 상태관리 & Ducks 파일 구조</p>
                        <span>2022-01-01 11:22:33</span>
                    </div>

                    <div className="article-body">
                        <div className="noulstyle padding-tr-40p article-card-body">

                        </div>
                    </div>

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