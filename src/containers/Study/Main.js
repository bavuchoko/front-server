import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../../redux/modules/auth";
import * as userActions from "../../redux/modules/user";
import Posts from "../../components/content/Posts";
import storage from "../../lib/storage";
import WriteButton from "../../components/util/WriteButton";
import {Pagination} from "../../components/content";
import {useLocation} from "react-router-dom";


function Main() {
    const loggedInfo = storage.get('loggedInfo');
    let isLoggedIn = loggedInfo? true : false;

    const writeBtn = isLoggedIn?  <WriteButton/> : null;
    const location = useLocation();

    const category = location.state ==undefined ? "" : location.state.category;

    const [totalElements, setTotalElements] = useState([]);
    const [currentPage, setCurrentPage] = useState([]);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        setTotalElements(pages.totalElements)
    },[pages])

    return (

        <div className="width-1140px mar-auto-0 height-100vh mein-body" >
            <div className="tc-spacer2"></div>
            <div className="underline width-100per height-70p">
                <span className="dsip-inlineblock mar-top-30 mar-l-20px mar-r-20px font-size-18px color-grey">({totalElements || 0})</span> {category.toUpperCase() || 'All' }
                <div className="wrt-btn-positioner">
                        {writeBtn}
                </div>
            </div>
            <div className="width-100per mar-auto-0 bac-color-white">

                <div className="article-container">
                    <div className="article-body">
                        <div className="noulstyle padding-tr-40p article-card-body">
                            <Posts category={category} currentPage={currentPage} setPageInfo={setPages}></Posts>
                        </div>

                        <Pagination
                            postsPerPage={pages.size}
                            totalPosts={pages.totalElements}
                            paginate={setCurrentPage}
                            currentPage={currentPage}
                        ></Pagination>
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