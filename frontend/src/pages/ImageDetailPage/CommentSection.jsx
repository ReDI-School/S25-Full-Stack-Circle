import React, { useState } from "react";
import { FaSmile, FaImage, FaGift, FaArrowRight } from "react-icons/fa";
import styles from "./CommentSection.module.css";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isCommentsVisible, setIsCommentsVisible] = useState(true);

  const handleAddComment = e => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([newComment, ...comments]); // Add new comments at the beginning
      setNewComment("");
    }
  };

  const toggleCommentsVisibility = () => {
    setIsCommentsVisible(!isCommentsVisible);
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.commentsContainer}>
        {comments.length > 0 && (
          <>
            <div
              className={styles.commentHeader}
              onClick={toggleCommentsVisibility}
            >
              <span className={styles.commentCount}>
                {comments.length}{" "}
                {comments.length === 1 ? "comment" : "comments"}
              </span>
              <span className={styles.commentCount}>
                {isCommentsVisible ? "▲" : "▼"}
              </span>
            </div>

            {isCommentsVisible && (
              <div className={styles.scrollableComments}>
                <ul className={styles.commentList}>
                  {comments.map((comment, index) => (
                    <li key={index} className={styles.commentItem}>
                      {comment}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>

      <div className={styles.fixedInputArea}>
        <div className={styles.questionText}>What do you think?</div>
        <form onSubmit={handleAddComment} className={styles.commentForm}>
          <div className={styles.inputContainer}>
            <textarea
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Add a comment to start the..."
              className={styles.commentInput}
              rows="1"
            />
            <div className={styles.iconGroup}>
              <button
                type="button"
                className={styles.iconButton}
                title="Add Emoticon"
              >
                <FaSmile size={20} />
              </button>
              <button
                type="button"
                className={styles.iconButton}
                title="Add GIF"
              >
                <FaGift size={20} />
              </button>
              <button
                type="button"
                className={styles.iconButton}
                title="Upload Photo"
              >
                <FaImage size={20} />
              </button>
            </div>
            {newComment.trim() && (
              <button
                type="submit"
                className={styles.sendButton}
                title="Send Comment"
              >
                <FaArrowRight size={20} />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentSection;
