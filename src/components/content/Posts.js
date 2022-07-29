import React from "react";
import {Link} from "react-router-dom";

const Posts = ({ posts, loading }) => {
    return (
        <>
            {loading && <div> loading... </div>}
            {posts.map((post) => (
            <Link key={post.id} className="article-card hover-btn" to="/">
                <div className="width-100per height-230p bac-color-white2 ">
                    <img className="article-card-img" src=""/>
                </div>
                <div>
                    <span className="article-card-category">JAVA</span>
                    <span className="article-card-date">2022-01-01</span>
                </div>
                <p className="article-card-title">
                    {post.title}
                </p>
                <p className="article-card-content">
                    {post.body}
                </p>

            </Link>
            ))}
        </>
    );
};
export default Posts;