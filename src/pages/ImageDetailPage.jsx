import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSmile, FaImage, FaGift, FaArrowRight } from "react-icons/fa"; // Import icons from react-icons

function ImageDetailPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isCommentsVisible, setIsCommentsVisible] = useState(true); // State to toggle comments visibility

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const toggleCommentsVisibility = () => {
    setIsCommentsVisible(!isCommentsVisible);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      e.target.style.height = `${e.target.scrollHeight}px`; // Expand the text field
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
        {comments.length > 0 ? (
          <>
            <div
              className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded cursor-pointer"
              onClick={toggleCommentsVisibility}
            >
              <span className="text-gray-700">
                {comments.length} {comments.length === 1 ? "comment" : "comments"}
              </span>
              <span className="text-gray-700">
                {isCommentsVisible ? "▲" : "▼"}
              </span>
            </div>

            {isCommentsVisible && (
              <ul className="list-disc pl-5 mb-4">
                {comments.map((comment, index) => (
                  <li key={index} className="mb-1">
                    {comment}
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <div className="bg-gray-100 px-4 py-2 rounded text-gray-700">
            What do you think?
          </div>
        )}

        {/* Input box with buttons */}
        <form onSubmit={handleAddComment} className="mt-4">
          <div className="flex items-center bg-gray-100 rounded px-4 py-2">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Add a comment"
              className="flex-grow bg-transparent border-none outline-none text-gray-700 resize-none overflow-hidden"
              rows="1"
            />
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 mx-2"
              title="Add Emoticon"
            >
              <FaSmile size={20} />
            </button>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 mx-2"
              title="Add GIF"
            >
              <FaGift size={20} />
            </button>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 mx-2"
              title="Upload Photo"
            >
              <FaImage size={20} />
            </button>
            {newComment.trim() && (
              <button
                type="submit"
                className="text-blue-500 hover:text-blue-700 mx-2"
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

export default ImageDetailPage;