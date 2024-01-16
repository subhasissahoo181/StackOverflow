import React from 'react'
import {Link} from "react-router-dom";
import './css/AllQuestions.css'
import {Avatar} from "@mui/material"
function AllQuestions() {
    return (
        <div className='all-questions'>
            <div className='all-questions-container'>
                <div className='all-questions-left'>
                    <div className='all-options'>
                        <p>0</p>
                        <span>Vote</span>
                    </div>
                    <div className='all-options'>
                        <p>0</p>
                        <span>Answers</span>
                    </div>
                    <div className='all-options'>
                        
                        <small>0 Views</small>
                    </div>
                </div>
                <div className='question-answer'>
                    <Link to='/question'>This is question title</Link>
                    <div style={{
                        width:"90%",
                    }}>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>

                    </div>
                    <div style={{
                        display:"flex"
                    }}>
                    <span className='question-tags'>
                        react
                    </span>
                    <span className='question-tags'>
                        antd
                    </span>
                    <span className='question-tags'>
                        frontend
                    </span>

                    </div>
                    <div className='author'>
                        <small>Timestamp</small>
                        <div className='author-details'>
                            <Avatar />
                            <p>User name</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AllQuestions;
