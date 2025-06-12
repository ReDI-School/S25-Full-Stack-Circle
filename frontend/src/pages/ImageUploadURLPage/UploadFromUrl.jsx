import React, { useState } from "react";
import styles from "./UploadFromUrl.module.css";

const UploadFromUrl = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleSubmit = async () => {
    if (!imageUrl) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:4000/api/pins/tagFromUrl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl })
      });

      const result = await res.json();

      if (result.success) {
        setPreviewUrl(result.imageUrl);
        setTags(result.tags);
      } else {
        alert("Tagging failed: " + result.error);
      }
    } catch (err) {
      alert("Something went wrong");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.imageFromUrlWrapper}>
      <div className={styles.createPinCard}>
        <div className={styles.leftPanel}>
          <div className={styles.formGroup}>
            <p className={styles.label}>Save Ideas from Website</p>
            <input
              type="text"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className={styles.formInput}
            />
            <button
              type="button"
              onClick={handleSubmit}
              className={styles.btnPrimary}
              disabled={isSubmitting || !imageUrl}
              style={{ marginTop: "1rem" }}
            >
              {isSubmitting ? "Processing..." : "Upload & Generate Tags"}
            </button>
          </div>

          {previewUrl && (
            <div style={{ marginTop: "2rem" }}>
              <img
                src={previewUrl}
                alt="Preview"
                className={styles.uploadedImage}
              />
              <p>Tags:</p>
              <ul>
                {tags.map((tag, i) => (
                  <li key={i}>#{tag}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadFromUrl;
