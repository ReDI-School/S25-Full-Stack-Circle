import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UploadFromUrl.module.css";

const UploadFromUrl = () => {
  const navigate = useNavigate();
  const [urlInput, setUrlInput] = useState("");
  const [isUrlSubmitted, setIsUrlsubmitted] = useState(false);
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    tags: [],
    link: ""
  });
  const handleUrlSubmit = e => {
    e.preventDefault();
    if (!urlInput) {
      alert("Enter a valid url");
      return;
    }
    setIsUrlsubmitted(true);
    setSubmittedUrl(urlInput);
    setFormData(prev => {
      return {
        ...prev,
        imageUrl: urlInput
      };
    });
  };

  // Handle form field changes
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  // Handle create pin & generate tags button click
  const handleCreatePin = async () => {
    if (!formData.title || !formData.description) {
      alert("Please fill in Title and Description");
      return;
    }
    setIsCreating(true);

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("You must be logged in");
        setIsCreating(false);
        return;
      }

      const response = await fetch(
        "http://localhost:4000/api/pins/uploadImageFromUrl",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ imageUrl: formData.imageUrl })
        }
      );
      const result = await response.json();
      const createPin = await fetch(
        "http://localhost:4000/api/pins/createpin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            ...formData,
            imageUrl: result.imageUrl
            // tags: result.tags
          })
        }
      );
      const createdPin = await createPin.json();

      if (createPin.status === 201) {
        alert("Pin created successfully!");
        navigate("/createpin");
      } else {
        alert("Failed to create pin: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Create pin error:", error);
      alert("Something went wrong while creating the pin");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className={styles.uploadFromUrlWrapper}>
      {/* URL input form */}
      {!isUrlSubmitted && (
        <form onSubmit={handleUrlSubmit} className={styles.urlInputWrapper}>
          <input
            type="text"
            placeholder="Enter image URL"
            value={urlInput}
            onChange={e => setUrlInput(e.target.value)}
            className={styles.urlInput}
          />
          {/* <button type="submit" style={{ padding: "10px 20px" }}>
            Submit URL
          </button> */}
        </form>
      )}

      {isUrlSubmitted && (
        <div className={styles.formAndPreviewWrapper}>
          {/* Left: Create Pin Form */}
          <div className={styles.urlFormInputWrapper}>
            <div className={styles.urlFormInputDiv}>
              <label className={styles.urlFormInputLabel}>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={styles.urlFormInputText}
                placeholder="Add a title"
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label className={styles.urlFormInputLabel}>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={styles.urlFormInputTextArea}
                rows={4}
                placeholder="Tell everyone what your Pin is about"
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label className={styles.urlFormInputLabel}>Link</label>
              <input
                type="text"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                placeholder="Add a destination link"
                className={styles.urlFormInputText}
              />
            </div>

            <div className={styles.boardDropdown}>
              <label className={styles.urlFormInputLabel}>Board</label>
              <select
                name="board"
                value={formData.board}
                onChange={handleInputChange}
                className={styles.boardDropdown_options}
              >
                <option value="">Choose a board</option>
                <option value="Inspiration">Inspiration</option>
                <option value="Work">Work</option>
                <option value="Ideas">Ideas</option>
              </select>
            </div>

            <button
              onClick={handleCreatePin}
              disabled={isCreating}
              className={styles.btnPrimary}
            >
              {isCreating ? "Creating..." : "Create Pin & Generate Tags"}
            </button>
          </div>

          {/* Right: Preview */}
          <div className={styles.imagePreviewWrapper}>
            <img
              src={submittedUrl}
              alt="Preview"
              className={styles.imagePreview}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadFromUrl;
