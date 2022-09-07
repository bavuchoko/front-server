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
import Redis from "../../assets/image/redis.png";
import Ubuntu from "../../assets/image/ubuntu.png";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Main() {


        return (
            <div className="width-1140px mar-auto-0 height-100vh">



                <div className="width-1140px mar-auto-0 bac-color-white height-340p">
                    <div className="article-container">
                        <div className="article-banner ">

                            <img src={Srping}/>
                            <img src={Rest}/>
                            <img src={Jpa}/>
                            <img src={Jenkins}/>
                            <img src={Maria}/>
                            <img src={Redis}/>
                            <img src={Ubuntu}/>

                        </div>

                    </div>
                </div>
                <div className="width-1140px ">
                    <nav className="width-100per height-100per  disp-flex">
                        <div className="width-340p">
                            <p className="dependecies-p">Back-End</p>
                            <div className="dependecies">
                                <ul className="noulstyle">
                                    <li className="topCate"> Srping boot</li>
                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />jpa / hibernate</li>
                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />lombok</li>
                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />security - jjwt</li>
                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />asciiDocs</li>
                                </ul>
                            </div>
                        </div>

                        <div className="width-340p">
                            <p className="dependecies-p">Database</p>
                            <div className="dependecies">
                                <ul className="noulstyle">

                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />mariaDB</li>
                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />redis</li>
                                </ul>
                            </div>
                        </div>

                        <div className="width-340p">
                            <p className="dependecies-p">Front-End</p>
                            <div className="dependecies">
                                <ul className="noulstyle">
                                    <li className="topCate"> React</li>
                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />Material-UI</li>
                                </ul>
                            </div>
                        </div>
                        <div className="width-340p">
                            <p className="dependecies-p">SERVER & CI / CD</p>
                            <div className="dependecies">
                                <ul className="noulstyle">
                                    <li className="topCate"> Ubuntu</li>
                                    <li className="topCate"> Github</li>
                                    <li className="topCate"> Jenkins</li>
                                </ul>
                            </div>
                        </div>
                    </nav>
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