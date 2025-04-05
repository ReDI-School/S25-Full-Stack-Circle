import React, { useState } from "react";
import { Link } from "react-router-dom";

function ImageDetailPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Image Detail Page</h1>
      <Link to="/explore" className="bg-gray-200 px-4 py-2 rounded">
        Back to Explore
      </Link>

      {/* Comment Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Comments</h2>
        <form onSubmit={handleAddComment} className="mb-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="border p-2 w-full mb-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Comment
          </button>
        </form>
        <ul className="list-disc pl-5">
          {comments.map((comment, index) => (
            <li key={index} className="mb-1">
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImageDetailPage;
