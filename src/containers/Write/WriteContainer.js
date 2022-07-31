import React, {createRef} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../../redux/modules/auth";
import * as userActions from "../../redux/modules/user";
import {Link} from "react-router-dom";
import 'codemirror/lib/codemirror.css'
import 'highlight.js/styles/github.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from '@toast-ui/react-editor';
import colorSyntaxPlugin from "@toast-ui/editor-plugin-color-syntax";
import hljs from "highlight.js";
import codeSyntaxHighlightPlugin from "@toast-ui/editor-plugin-code-syntax-highlight";
import SimpleSelect from "../../components/util/SimpleSelect";





function WriteContainer(props) {
    let isLoggedIn = props.isLoggedIn;
    isLoggedIn = true;
    const writeBtn = isLoggedIn? <Link className="roboto write_btn float-right" to="/write">WRITE</Link> : null;

    const editorRef = createRef();

    return (
        <div className="width-1248px mar-auto-0 disp-flex height-100vh">
            <div className="width-1168px mar-auto-0 bac-color-white padding-rl-40p bac-color-temp">
                <div className="editor-header-container mar-top-30">
                </div>
                <div className="editor-title-container bac-color-white disp-flex">
                    <SimpleSelect/>
                    <input className="content-title-input"/>
                </div>
                <div>

                    <Editor
                        initialValue="hello react editor world!"
                        previewStyle="vertical"
                        height="600px"
                        initialEditType="markdown"
                        useCommandShortcut={true}
                        plugins={[codeSyntaxHighlightPlugin.bind(hljs), colorSyntaxPlugin]}

                    />
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
)(WriteContainer);