import React, {useEffect, useState} from 'react';
import HomeSideMenu from "../../components/sideMenu/HomeSideMenu";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../../redux/modules/auth";
import * as userActions from "../../redux/modules/user";
import axios from "axios";
import {Link} from "react-router-dom";
import PrevButton from "../../components/util/PrevButton";
import NextButton from "../../components/util/NextButton";
import storage from "../../lib/storage";
import UpdateOrDeleteBtn from "../../components/util/UpdateOrDeleteBtn";

function Main() {
    const loggedInfo = storage.get('loggedInfo');
    let isLoggedIn = loggedInfo? true : false;

    const UpdateOrDelet = isLoggedIn?  <UpdateOrDeleteBtn /> : null;

    const [hits, setHits] = useState([]);
    const [loading, setLoading] = useState(false);

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
                <p className="text-indent-20p main-category padding-rl-40p">Java</p>

                <div className="article-container">

                    <div className="article-banner view-Header">
                    </div>

                    <div className="article-title ">
                        <p>조 React 리덕스(Redux) Immutable.js 상태관리 & Ducks 파일 구조</p>
                        {UpdateOrDelet}

                        <span>2022-01-01 11:22:33</span>
                    </div>

                    <div className="article-body">
                        <div className="noulstyle padding-tr-40p article-card-body">

                            내용

                        </div>
                    </div>
                    <div className="article-footer">
                        <ul className="noulstyle">
                            <li className="disp-block float-left mar-l-20px">
                                <Link to="/">
                                    <PrevButton/>
                                </Link>
                            </li>
                            <li  className="disp-block float-right mar-r-20px">
                                <Link to="/">
                                    <NextButton />
                                </Link>
                            </li>
                        </ul>
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