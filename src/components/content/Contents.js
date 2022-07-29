
import React from "react";
import {Link} from "react-router-dom";


function Contents () {


    return (

        <li className="article-card-container noulstyle disp-flex">
            <Link className="article-card hover-btn" to="/">
                <div className="width-100per height-230p bac-color-white2">
                    <img className="article-card-img" src=""/>
                </div>
                <div>
                    <span className="article-card-category">JAVA</span>
                    <span className="article-card-date">2022-01-01</span>
                </div>
                <p className="article-card-title">
                    React 리덕스(Redux) Immutable.js 상태관리 & Ducks 파일 구조
                </p>
                <p className="article-card-content">
                    자바스크립트에서 불변성 데이터를 다룰 수 있도록 도와주는 것이 바로 Immutable.js입니다. 우선, 객체 불변성에 대해 살펴 보도록 하겠습니다. 12345let a = 5;let b ...
                </p>

            </Link>


            <Link className="article-card hover-btn" to="/">
                <div className="width-100per height-230p bac-color-white2">
                    <img className="article-card-img" name="search" src=""/>
                </div>
                <div>
                    <span className="article-card-category">JAVA</span>
                    <span className="article-card-date">2022-01-01</span>
                </div>
                <p className="article-card-title">
                    React 리덕스(Redux) Immutable.js 상태관리 & Ducks 파일 구조
                </p>
                <p className="article-card-content">
                    자바스크립트에서 불변성 데이터를 다룰 수 있도록 도와주는 것이 바로 Immutable.js입니다. 우선, 객체 불변성에 대해 살펴 보도록 하겠습니다. 12345let a = 5;let b ...
                </p>

            </Link>

        </li>
    );

}
export default Contents;
