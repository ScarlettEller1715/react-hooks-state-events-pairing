import React, { useState } from "react"

function RenderComments({ comments }) {
    
    const [showComments, setShowComments] = useState("true")


    function PrintComments({ comments }) {
        if (showComments === "true") {
        return comments.map((comment) => {
            return <div className="Comment">
                        <h3>{comment.user}</h3>
                        <p>{comment.comment}</p>
                    </div>
        })
    } else {
        return <p>Comments Hidden</p>
    }
    }

    function hideComments() {
        if (showComments === "true") {
            return setShowComments("false")
        } else {
            return setShowComments("true")
        }
    }
    
    return(
        <div className="Comments">
            <button onClick={hideComments}>Hide Comments</button>
            <PrintComments comments={comments} />
        </div>
    )
}

export default RenderComments