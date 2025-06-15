import { useState } from "react";
import styles from "./CreatePin.module.css";
import { MdExpandMore } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";

const CreatePinPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    tags: [],
    link: "",
    board: ""
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  // Handle file selection
  const handleFileSelect = e => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };
  // Handle form input changes
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  };
  // Upload image , get AI tags and Create Pin
  const handleImageUpload = async () => {
    if (!selectedFile) return;

    if (!formData.title || !formData.description) {
      alert("Please fill in Title and Description");
      return;
    }

    setIsUploading(true);
    // setIsGeneratingTags(true);

    try {
      const token = localStorage.getItem("authToken");
      console.log(token);
      if (!token) {
        alert("You must be logged in");
        setIsUploading(false);
        return;
      }

      const formDataObj = new FormData();
      formDataObj.append("image", selectedFile);

      const response = await fetch(
        "http://localhost:4000/api/pins/uploadAndTag",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formDataObj
        }
      );

      const result = await response.json();
      if (!result.success) {
        alert("Failed to upload image: " + result.error);
        setIsUploading(false);
        return;
      }

      setFormData(prev => ({
        ...prev,
        imageUrl: result.imageUrl,
        tags: result.tags
      }));
      /* ******************************* Create pin */
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
            imageUrl: result.imageUrl,
            tags: result.tags
          })
        }
      );

      const createdPin = await createPin.json();
      console.log("Created Pin Response:", createdPin);
      console.log(
        "createPin.status:",
        createPin.status,
        typeof createPin.status
      );
      console.log(
        "createdPin.success:",
        createdPin.success,
        typeof createdPin.success
      );

      if (createPin.status === 201) {
        console.log("in the success block");
        alert("Pin created successfully!");
        window.location.reload();
        return;
      } else {
        alert("Failed to create pin:" + createdPin.error || "unknown error");
      }
    } catch (error) {
      console.error("Upload and create pin error:", error);
      alert("Failed to upload image and create pin*something went wrong");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={styles.createPinContainer}>
      <div className={styles.createPinCard}>
        <div className={styles.leftPanel}>
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Uploaded Preview"
              className={styles.uploadedImage}
            />
          ) : (
            <label className={styles.uploadArea}>
              <div className={styles.uploadIconContainer}>
                <FaArrowAltCircleUp className={styles.uploadIcon} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  hidden
                />
                <div className={styles.uploadPlaceholder}>
                  Choose a file or drag and drop it here
                </div>
              </div>

              <div className={styles.uploadrecomendtext}>
                {" "}
                We recommend using high quality .jpg files less than 20 MB or
                .mp4 files less than 200 MB
              </div>
            </label>
          )}

          {/* here btn to upload to S3 and call ai  */}
          {selectedFile && !formData.imageUrl && (
            <button
              type="button"
              onClick={handleImageUpload}
              disabled={isUploading}
              className={styles.btnPrimary}
            >
              {isUploading ? "Uploading..." : "Upload & Generate Tags"}
            </button>
          )}
          <div className={styles.saveButton}>
            <button
              type="button"
              className={styles.btnPrimary}
              onClick={() => (window.location.href = "/image_upload_from_url")}
            >
              Upload from URL
            </button>
          </div>
        </div>
        <div className={styles.rightPanel}>
          <form className={styles.pinForm}>
            <div className={styles.formGroup}>
              <p className={styles.label}>Title</p>
              <input
                name="title"
                type="text"
                placeholder="Add a title"
                className={styles.formInput}
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>
              <p className={styles.label}>Description</p>
              <textarea
                placeholder="Tell everyone what your Pin is about"
                className={styles.formTextarea}
                value={formData.description}
                onChange={handleInputChange}
                name="description"
              />
            </div>

            <div className={styles.formGroup}>
              <p className={styles.label}>Link</p>
              <input
                type="text"
                placeholder="Add a destination link"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <p className={styles.label}>Board</p>
              <select className={styles.formInput}>
                <option>Choose a board</option>
                <option>Inspiration</option>
                <option>Work</option>
                <option>Ideas</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <p className={styles.label}>Tagged topics (0)</p>
              <input
                type="text"
                placeholder="Search for a tag"
                className={styles.formInput}
              />
              <p className={styles.infoText}>
                Don’t worry, people won’t see your tags.
              </p>
            </div>

            <div className={styles.formGroup}>
              <button
                type="button"
                className={styles.moreOptionsBtn}
                onClick={() => setShowMoreOptions(!showMoreOptions)}
              >
                More Options <MdExpandMore className={styles.iconRight} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePinPage;
