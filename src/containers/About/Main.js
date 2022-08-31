import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../../redux/modules/auth";
import * as userActions from "../../redux/modules/user";
import Jpa from "../../assets/image/jpa.png";
import Maria from "../../assets/image/mariadb.png";
import Jenkins from "../../assets/image/jenkins.png";
import Rest from "../../assets/image/restapi.png";
import Srping from "../../assets/image/big/springboot.png";
import Redis from "../../assets/image/redis.png";
import Ubuntu from "../../assets/image/ubuntu.png";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Main() {


        return (
            <div className="width-1140px mar-auto-0 disp-flex height-100vh">
                <div className="width-340p">
                    <nav className="width-100per height-100per bac-color-grey border-1-s-g">
                        <div className="width-340p">
                            <p className="dependecies-p">Back-End</p>
                            <div className="dependecies">
                                <ul className="noulstyle">
                                    <li className="topCate"> Srping boot</li>
                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />jpa / hibernate</li>
                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />lombok</li>
                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />security</li>
                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />jjwt</li>
                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />restdocs</li>
                                </ul>
                            </div>

                            <p className="dependecies-p">Database</p>
                            <div className="dependecies">
                                <ul className="noulstyle">

                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />mariaDB</li>
                                    <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />redis</li>
                                </ul>
                            </div>
                        </div>

                        <p className="dependecies-p">Front-End</p>
                        <div className="dependecies">
                            <ul className="noulstyle">
                                <li className="topCate"> React</li>
                                <li className="subCate"> <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />Material-UI</li>
                            </ul>
                        </div>

                        <p className="dependecies-p">CI / CD</p>
                        <div className="dependecies">
                            <ul className="noulstyle">
                                <li className="topCate"> Ubuntu</li>
                                <li className="topCate"> Github</li>
                                <li className="topCate"> Jenkins</li>
                            </ul>
                        </div>
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
                            <img src={Redis}/>
                            <img src={Ubuntu}/>

                        </div>
                        <div className="date-selector-div " >

                        </div>

                        <div className="article-body">

                            <div className="noulstyle padding-tr-40p article-card-body">
                                {/*<table className="description-table-parent">*/}
                                {/*    <tbody className="description-table">*/}
                                {/*    <tr>*/}
                                {/*        <td>Spring Boot</td>*/}
                                {/*        <td>2.7.1</td>*/}
                                {/*    </tr>*/}
                                {/*    <tr>*/}
                                {/*        <td>MariaDB</td>*/}
                                {/*        <td>10.3.34-MariaDB-0ubuntu0.20.04.1</td>*/}
                                {/*    </tr>*/}
                                {/*    <tr>*/}
                                {/*        <td>Jenkins</td>*/}
                                {/*        <td>Jenkins 2.346.2</td>*/}
                                {/*    </tr>*/}
                                {/*    <tr>*/}
                                {/*        <td>JPA</td>*/}
                                {/*        <td></td>*/}
                                {/*    </tr>*/}
                                {/*    <tr>*/}
                                {/*        <td>Rest Api</td>*/}
                                {/*        <td></td>*/}
                                {/*    </tr>*/}
                                {/*    </tbody>*/}
                                {/*</table>*/}
                            </div>
                            <div className="noulstyle padding-tr-40p article-card-body margin-left-10p">

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