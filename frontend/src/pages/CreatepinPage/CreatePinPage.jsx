import { useState } from "react";
import styles from "./CreatePin.module.css";
import { MdExpandMore } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";

const CreatePinPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    tags: []
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  // const [isGeneratingTags, setIsGeneratingTags] = useState(false);
  // const [isCreating, setIsCreating] = useState(false);
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

  // Upload image and get AI tags
  const handleImageUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    // setIsGeneratingTags(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append("image", selectedFile);

      const response = await fetch(
        "http://localhost:4000/api/pins/uploadAndTag",
        {
          method: "POST",
          body: formDataObj
        }
      );

      const result = await response.json();

      if (result.success) {
        setFormData(prev => {
          return {
            ...prev,
            imageUrl: result.imageUrl,
            tags: result.tags
          };
        });
      } else {
        alert("Failed to upload image: " + result.error);
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image and generate tags");
    } finally {
      setIsUploading(false);
      // setIsGeneratingTags(false);
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
            <button>Save from URL</button>
          </div>
        </div>
        <div className={styles.rightPanel}>
          <form className={styles.pinForm}>
            <div className={styles.formGroup}>
              <p className={styles.label}>Title</p>
              <input
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
