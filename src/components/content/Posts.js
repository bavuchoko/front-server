import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Content from "../../lib/api/Content";

const Posts = ({ category, currentPage, setPageInfo }=[]) => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            Content.getContentCategory(category, currentPage)
                .then((response) => {
                    setPosts(response.data['_embedded']['contentList']);
                    setPageInfo(response.data['page']);
                    setLoading(false);
                    console.log(response.data);
                })
                .catch((error) => {
                    setPosts(null)
                    setPageInfo(0);
                    console.log('error', error)
                })
        };
        fetchData();
    }, [category, currentPage]);
    if (posts != null) {
        return (
            <>
                {loading && <div> loading... </div>}
                {posts.map((post) => (
                    <Link className="article-card hover-btn disp-flex" key={post.id}
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
                                 src={require('../../assets/image/big/' + post.thumbnail + '.png')}/>
                        </div>
                        <div className="article-card-body-body">
                            <div className="disp-flex res-disp-block">
                                <span className="article-card-category">[ {post.category.toUpperCase()} ]</span>
                                <p className="article-card-title">
                                    {post.title}
                                </p>
                                <p className="article-card-time">{post.writeTime.substring(0,16)}</p>
                            </div>
                            <p className="article-card-content">
                                {post.bodyHtml&&post.bodyHtml.substring(0,300)+"..."}
                            </p>
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