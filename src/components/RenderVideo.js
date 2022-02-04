import React, { useState } from "react"

function RenderVideo({ video }) { 
    
    const [upvotes, setUpvotes] = useState(video.upvotes)
    const [downvotes, setDownvotes] = useState(video.downvotes)
    
    function handleUpvote() {
        return (
            setUpvotes(upvotes + 1)
        )
    }

    function handleDownvote() {
        return (
            setDownvotes(downvotes + 1)
        )
    }
    
    return (
    <div className="Video" >
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <small>{video.views} views - {video.createdAt}</small>
      <div className="Like Buttons">
        <button onClick={handleUpvote}>{upvotes} likes</button>
        <button onClick={handleDownvote}>{downvotes} dislikes</button>
      </div>
    </div>
    )
}

export default RenderVideo