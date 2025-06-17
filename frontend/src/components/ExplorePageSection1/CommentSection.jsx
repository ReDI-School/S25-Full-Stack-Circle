import React, { useState, useContext, useEffect } from "react";
import { FaSmile, FaImage, FaGift } from "react-icons/fa";
import styles from "./CommentSection.module.css";
import { UserContext } from "../../contexts/UserContext";

function CommentSection({ imgId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isCommentsVisible, setIsCommentsVisible] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(UserContext);

  // Debug auth status
  useEffect(() => {
    if (user) {
      console.warn("Auth status:", {
        userId: user.id,
        hasToken: !!user.token,
        email: user.email
      });
    } else {
      console.error("User not logged in");
    }
  }, [user]);

  // Load comments when component mounts
  useEffect(() => {
    if (imgId) {
      loadComments();
    }
  }, [imgId]);

  const handleAddComment = async e => {
    e.preventDefault();
    if (newComment.trim()) {
      setError(null);

      if (!user || !user.token) {
        setError("You must be logged in to add a comment.");
        return;
      }

      try {
        const API_URL = "http://localhost:4000/api/comments";

        // Ensure pinId is a number
        const pinIdValue = Number(imgId);
        if (isNaN(pinIdValue)) {
          throw new Error("Invalid pin ID. Must be a number.");
        }

        // Verify user authentication
        if (!user || !user.token || !user.id) {
          console.error("User authentication issue:", {
            hasUser: !!user,
            hasToken: !!(user && user.token),
            hasId: !!(user && user.id)
          });
          throw new Error("Authentication error. Please try logging in again.");
        }

        const dataToSend = {
          pinId: pinIdValue,
          content: newComment
        };

        // console.log("Sending comment data:", dataToSend);
        // console.log("User auth:", { userId: user.id, hasToken: !!user.token });

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
          console.error("Error response:", errorData);
          throw new Error(
            errorData.error ||
              errorData.message ||
              `Failed to add comment (${response.status})`
          );
        }

        const addedComment = await response.json();
        console.warn("Comment added successfully:", addedComment);

        // Clear input and reload comments
        setNewComment("");
        loadComments();
      } catch (error) {
        console.error("Error adding comment:", error);
        setError(error.message || "Failed to add comment. Please try again.");
      }
    }
  };

  const toggleCommentsVisibility = () => {
    setIsCommentsVisible(!isCommentsVisible);
  };

  const loadComments = async () => {
    try {
      setError(null);
      setIsLoading(true);

      if (!imgId) {
        console.error("Missing pin ID. Cannot load comments.");
        setError("Missing pin ID. Cannot load comments.");
        setIsLoading(false);
        return;
      }

      const pinIdValue = Number(imgId);
      if (isNaN(pinIdValue)) {
        console.error(`Invalid pin ID: ${imgId}`);
        setError("Invalid pin ID format.");
        setIsLoading(false);
        return;
      }

      console.warn("Loading comments for pinId:", pinIdValue);

      const response = await fetch(
        `http://localhost:4000/api/comments?pinId=${pinIdValue}`
      );

      if (!response.ok) {
        throw new Error("Failed to load comments");
      }

      const data = await response.json();
      // console.log("comments", data.comments);
      setComments(data.comments || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load comments. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleDeleteComment = async commentId => {
    // console.log("delete", commentId);
    // console.log("user ", user.id);

    if (!window.confirm("Are you sure you want to delete this comment?")) {
      return;
    }

    try {
      setError(null);
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

      // Update the state directly for better UX instead of reloading all comments
      setComments(comments.filter(comment => comment.id !== commentId));
      console.warn(`Comment with ID ${commentId} deleted successfully.`);
    } catch (err) {
      console.error("Error deleting comment:", err);
      setError("Failed to delete comment. Please try again.");
      loadComments(); // Reload comments to ensure consistency in case of error
    }
  };
  return (
    <div className={styles.container}>
      {/* Show error message if there is one */}
      {error && <div className={styles.errorMessage}>{error}</div>}

      {/* Show loading indicator */}
      {isLoading && (
        <div className={styles.loadingMessage}>Loading comments...</div>
      )}

      {/* If there are no comments but we've loaded them, show empty state */}
      {!isLoading && !error && comments.length === 0 && (
        <div className={styles.emptyState}>
          No comments yet. Be the first to comment!
        </div>
      )}

      {/* Comments header and list */}
      {comments.length > 0 && (
        <div className={styles.commentsSection}>
          <div className={styles.commentHeader}>
            <div
              onClick={toggleCommentsVisibility}
              className={styles.toggleHeader}
            >
              <span>
                {comments.length}{" "}
                {comments.length === 1 ? "comment" : "comments"}
              </span>
              <span>{isCommentsVisible ? "▲" : "▼"}</span>
            </div>
            <button
              onClick={loadComments}
              className={styles.refreshButton}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "↻ Refresh"}
            </button>
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
            <button
              type="submit"
              className={styles.submitButton}
              disabled={!newComment.trim()}
            >
              Post
            </button>
          </form>
        </div>
      ) : (
        <p>Please log in to comment.</p>
      )}
    </div>
  );
}

export default CommentSection;
