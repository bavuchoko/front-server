import React, {useEffect, useState} from 'react';
import Docs from "../../lib/api/Docs";

function DocViewer() {

    const [html, setHtml] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        Docs.getApiDocs('board')
            .then((response) => {
                setHtml(response.data);
                setLoading(false)
                console.log(response.data)
            })
            .catch((error) => {
                setHtml(null)
                console.log('error', error)
            })
        };
    fetchData();
    }, [html]);

    function createMarkup() {
        return {__html: html};
    }

    return (

        <div className="width-1140px mar-auto-0 height-100vh mein-body" >
            <div className="underline width-100per height-70p">
                    <span className="dsip-inlineblock mar-top-30 mar-l-20px mar-r-20px font-size-18px color-grey">API 사용 명세서</span>
            </div>

            <div className="article-container doc-container">
                <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    );
}


export default DocViewer;