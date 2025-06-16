import React, { useState } from "react";
import { FaSmile, FaImage, FaGift } from "react-icons/fa";
import styles from "./CommentSection.module.css";

function CommentSection({ imgId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isCommentsVisible, setIsCommentsVisible] = useState(true);

  const handleAddComment = e => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([newComment, ...comments]);
      setNewComment("");
    }
  };

  const toggleCommentsVisibility = () => {
    setIsCommentsVisible(!isCommentsVisible);
  };

  const loadComments = async e => {
    try {
      // const imgId =
      console.log("id ", imgId);
      const response = await fetch(
        `http://localhost:4000/api/comments/id=${imgId}`
      );

      if (!response.ok) {
        console.log("No comments found");
      }

      const data = await response.json();
      setComments(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("loadComments");
    }
  };

  return (
    <div className={styles.container}>
      {/* Comments header and list */}
      {comments.length > 0 && (
        <div className={styles.commentsSection}>
          <div
            className={styles.commentHeader}
            onClick={toggleCommentsVisibility}
          >
            <span>
              {comments.length} {comments.length === 1 ? "comment" : "comments"}
            </span>
            <span>{isCommentsVisible ? "▲" : "▼"}</span>
          </div>

          {isCommentsVisible && (
            <div className={styles.commentsContainer}>
              {comments.map((comment, index) => (
                <div key={index} className={styles.commentItem}>
                  {comment}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Comment input area */}
      <div className={styles.inputArea}>
        <button onClick={loadComments}>Comments</button>
        <div className={styles.questionText}>What do you think?</div>
        <form onSubmit={handleAddComment} className={styles.commentForm}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              placeholder="Add a comment to start the..."
              className={styles.commentInput}
            />
            <div className={styles.iconGroup}>
              <button type="button" className={styles.iconButton}>
                <FaSmile />
              </button>
              <button type="button" className={styles.iconButton}>
                <FaGift />
              </button>
              <button type="button" className={styles.iconButton}>
                <FaImage />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentSection;
