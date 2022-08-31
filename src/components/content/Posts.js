import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Content from "../../lib/api/Content";

const Posts = ({ category, currentPage, setPageInfo  }=[]) => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            Content.getContentCategory(category)
                .then((response) => {
                    setPosts(response.data['_embedded']['contentList']);
                    setPageInfo(response.data['page']);
                    setLoading(false)
                })
                .catch((error) => {
                    setPosts(null)
                    setPageInfo(0);
                    console.log('error', error)
                })
        };
        fetchData();
    }, [category]);
    if (posts != null) {
        return (
            <>
                {loading && <div> loading... </div>}
                {posts.map((post) => (
                    <Link className="article-card hover-btn disp-flex mar-b-20px" key={post.id}
                          to={{
                              pathname: '/study/view',
                              state: {
                                  // name: '이름',
                                  data: post.id,
                                  body: '본문',
                              },
                          }}
                    >
                        <div className="width-140p height-140p mar-r-20px article-img">
                            <img className="hover-btn"
                                 src={require('../../assets/image/big-' + post.category + '.png')}/>
                            {/*<img  className="hover-btn" src={java} />*/}
                        </div>
                        <div className="article-card-body-body">
                            <div className="disp-flex">
                                <span className="article-card-category">[ {post.category.toUpperCase()} ]</span>
                                {/*<span className="article-card-date">{post.writeTime.substring(0,10)}</span>*/}
                                <p className="article-card-title">
                                    {post.title}
                                </p>
                            </div>
                            <p className="article-card-content">
                                {post.bodyPreView}
                            </p>
                            {/*<div className="width-100per height-160p bac-color-white2 ">*/}
                            {/*    <img className="article-card-img" src=""/>*/}
                            {/*</div>*/}
                        </div>

                    </Link>
                ))}
            </>
        );
    } else {
        return (
            <>
                <div className="article-card">
                    {loading && <div> loading...  or  no  data </div>}
                </div>
            </>
        )
    }
    ;
}
export default Posts;