import React from "react";
import {Link} from "react-router-dom";

const Posts = ({ posts, loading }) => {
    return (
        <>
            {loading && <div> loading... </div>}
            {posts.map((post) => (
                <Link className="article-card hover-btn" key={post.id}
                      to={{
                          pathname: '/study/view' ,
                          state: {
                              // name: '이름',
                              data: post.id,
                              // body: '본문',
                          },
                      }}
                >
                    {/*<Link key={post.id} className="article-card hover-btn" to='/study/view'  state={{ data: 'a'}}>*/}
                    <div className="width-100per height-230p bac-color-white2 ">
                        <img className="article-card-img" src=""/>
                    </div>
                    <div>
                        <span className="article-card-category">JAVA</span>
                        <span className="article-card-date">{post.writeTime.substring(0,16)}</span>
                    </div>
                    <p className="article-card-title">
                        {post.title}
                    </p>
                    <p className="article-card-content">
                        {post.bodyPreView}
                    </p>

                </Link>
            ))}
        </>
    );
};
export default Posts;