import { useState } from 'react';
import styles from './CreatePin.module.css';
import { MdExpandMore } from 'react-icons/md';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const CreatePin = () => {
  const [image, setImage] = useState(null);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handleImageUpload = e => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.createPinContainer}>
      <div className={styles.createPinCard}>
        <div className={styles.leftPanel}>
          {image ? (
            <img
              src={image}
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
                  onChange={handleImageUpload}
                  hidden
                />
                <div className={styles.uploadPlaceholder}>
                  Choose a file or drag and drop it here
                </div>
              </div>

              <div className={styles.uploadrecomendtext}>
                {' '}
                We recommend using high quality .jpg files less than 20 MB or
                .mp4 files less than 200 MB
              </div>
            </label>
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
              />
            </div>

            <div className={styles.formGroup}>
              <p className={styles.label}>Description</p>
              <textarea
                placeholder="Tell everyone what your Pin is about"
                className={styles.formTextarea}
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

export default CreatePin;
