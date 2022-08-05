import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../../redux/modules/auth";
import * as userActions from "../../redux/modules/user";
import Jpa from "../../assets/image/jpa.png";
import Maria from "../../assets/image/mariadb.png";
import Jenkins from "../../assets/image/jenkins.png";
import Rest from "../../assets/image/restapi.png";
import Srping from "../../assets/image/springboot.png";


function Main() {


        return (
            <div className="width-1140px mar-auto-0 disp-flex height-100vh">
                <div className="width-340p">
                    <nav className="width-100per height-100per bac-color-grey border-1-s-g">
                        <div className="width-340p"></div>
                    </nav>
                </div>

                <div className="width-800p mar-auto-0 bac-color-white">
                    <p className="text-indent-20p main-category padding-rl-40p">About</p>
                    <div className="article-container">
                        <div className="article-banner ">
                            
                            <img src={Srping}/>
                            <img src={Rest}/>
                            <img src={Jpa}/>
                            <img src={Jenkins}/>
                            <img src={Maria}/>

                        </div>
                        <div className="date-selector-div " >

                        </div>

                        <div className="article-body">

                            <div className="noulstyle padding-tr-40p article-card-body">
                            Description
                        </div>
                        <div className="noulstyle padding-tr-40p article-card-body">
                            Contact
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