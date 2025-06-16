import React, { useState, useContext } from "react";
import { FaSmile, FaImage, FaGift } from "react-icons/fa";
import styles from "./CommentSection.module.css";
import { UserContext } from "../../contexts/UserContext";

function CommentSection({ imgId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isCommentsVisible, setIsCommentsVisible] = useState(true);
  const { user } = useContext(UserContext);

  const handleAddComment = async e => {
    e.preventDefault();
    if (newComment.trim()) {
      // setComments([newComment, ...comments]);
      console.log("add comment content ", newComment);
      console.log("user ", user.email);
      if (!user.token) {
        console.log("You must be logged in to add a comment.");
      } else console.log("token", user.token);
      try {
        const API_URL = "http://localhost:4000/api/comments";
        const dataToSend = {
          pinId: imgId,
          content: newComment
        };
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`
          },
          body: JSON.stringify(dataToSend)
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to add comment.");
        }

        const addedComment = await response.json();

        // Success!
        console.log("Comment added successfully:", addedComment);
      } catch (error) {
        console.error("Error adding comment:", error);
      } finally {
        console.log("end of add comment");
      }
      setNewComment("");
      loadComments();
    }
  };

  const toggleCommentsVisibility = () => {
    setIsCommentsVisible(!isCommentsVisible);
  };

  const loadComments = async e => {
    try {
      console.log("id ", imgId);
      const response = await fetch(
        `http://localhost:4000/api/comments/?pinId=${imgId}`
      );

      if (!response.ok) {
        console.log("No comments found");
      }

      const data = await response.json();
      console.log("comments", data.comments);
      setComments(data.comments);
    } catch (err) {
      console.error(err);
    } finally {
      console.log("loadComments");
    }
  };
  const handleDeleteComment = async commentId => {
    console.log("delete", commentId);
    console.log("user ", user.id);

    if (!window.confirm("Are you sure you want to delete this comment?")) {
      return;
    }

    try {
      const dataToSend = {
        id: Number(commentId)
      };
      const response = await fetch("http://localhost:4000/api/comments/", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete comment.");
      }

      console.log(`Comment with ID ${commentId} deleted successfully.`);
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
    loadComments();
  };
  return (
    <div className={styles.container}>
      <button onClick={loadComments}>Click to see comments</button>
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
                  <strong>{comment.user.email.split("@")[0]}:</strong>{" "}
                  {comment.content}
                  {user && user.id === comment.userId && (
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDeleteComment(comment.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Comment input area */}
      {user ? (
        <div className={styles.inputArea}>
          <div className={styles.questionText}>What do you think? </div>
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
      ) : (
        <p>Please log in to comment.</p>
      )}
    </div>
  );
}

export default CommentSection;
