import React from 'react'
import { Link } from "react-router-dom";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HistoryIcon from "@material-ui/icons/History";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './index.css';

function MainQuestion() {
    const [show, setshow] = useState(false)
    return (
        <div className='main'>
            <div className='main-container'>
                <div className='main-top'>
                    <h2 className='main-question'>This is question title</h2>
                    <Link to='/add-question'>
                        <button>Ask Question</button>
                    </Link>
                </div>
                <div className='main-desc'>
                    <div className='info'>
                        <p>TimeStamp</p>
                        <p>Active<span>today</span></p>
                        <p>View<span>45 times</span></p>
                    </div>
                </div>

                <div className='all-questions'>
                    <div className='all-questions-container'>
                        <div className='all-questions-left'>
                            <div className='all-options'>
                                <p className="arrow">▲</p>
                                <p className="arrow">0</p>
                                <p className="arrow">▼</p>
                                <BookmarkIcon />
                                <HistoryIcon />
                            </div>
                        </div>
                        <div className="question-answer">
                            <p>This is questioin body</p>
                            <div className='author'>
                                <small>asked "Timestamp</small>
                                <div className='auth-details'>
                                    <Avatar />
                                    <p>Author name</p>
                                </div>
                            </div>
                            <div className='comments'>
                                <div className='component'>
                                    <p>This is comment -<span>User name</span><small>Timestamp</small></p>
                                </div>
                                <p onClick={() => setshow(!show)}>Add a comment</p>{
                                    show && (<div className='title'>
                                        <textarea
                                        style={{
                                            margin:"5px 0px",
                                            padding:"10px",
                                            border:"1px solid rgba(0,0,0,0.2)",
                                            borderRadius:"3px",
                                            outline:"none",
                                        }}
                                         type='text' placeholder='Add your comment.' rows={5} ></textarea>
                                        <button
                                        style={{
                                            maxWidth:"fit-content",
                                        }}
                                        >Add comment</button>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{flexDirection:"column"}} className='all-questions'>
                    <p style={{
                        marginBottom:"20px",
                        fontSize:"1.3rem",
                        fontWeight:"300"

                    }}>No. of answer</p>
                    <div  className='all-questions-container'>
                        <div className='all-questions-left'>
                            <div className='all-options'>
                                <p className="arrow">▲</p>
                                <p className="arrow">0</p>
                                <p className="arrow">▼</p>
                                <BookmarkIcon />
                                <HistoryIcon />
                            </div>
                        </div>
                        <div className="question-answer">
                            <p>This is questioin body</p>
                            <div className='author'>
                                <small>asked "Timestamp"</small>
                                <div className='auth-details'>
                                    <Avatar />
                                    <p>Author name</p>
                                </div>
                            </div>
                            {/* <div className='comments'>
                                <div className='component'>
                                    <p>This is comment -<span>User name</span><small>Timestamp</small></p>
                                </div>
                                <p onClick={() => setshow(!show)}>Add a comment</p>{
                                    show && (<div className='title'>
                                        <textarea type='text' placeholder='Add your comment.' rows={5} style={{}}></textarea>
                                        <button>Add comment</button>
                                    </div>)
                                }
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-answer' >
                <h3 style={{
                    fontSize:"22px",
                    margin:"10px 0",
                    fontWeight:"400"
                }}
                >Your Answer</h3>
                <ReactQuill className="react-quill" theme="snow" style={{
                    height:"200px"
                }}/>
            </div>
            <button style={{
                maxWidth:"fit-content",
                marginTop:"50px"
            }}>Post Your Answer</button>
        </div>
    );
}

export default MainQuestion
