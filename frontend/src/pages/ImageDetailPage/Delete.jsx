import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Detail.module.css";

function Delete({ pinId }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDeleteOption = () => {
    setMenuOpen(false); // Close menu
    setShowDeleteDialog(true); // Show confirmation dialog
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
  };

  const handleConfirmDelete = async () => {
    if (!pinId) return;

    setIsDeleting(true);
    try {
      // Using fetch instead of axios to avoid dependency issues
      const response = await fetch(`/api/pins/${pinId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete pin: ${response.status}`);
      }

      setIsDeleting(false);
      setShowDeleteDialog(false);
      navigate("/explore"); // Redirect after successful deletion
    } catch (error) {
      console.error("Error deleting pin:", error);
      setIsDeleting(false);
      // You could add error state handling here
    }
  };

  return (
    <>
      {/* Three-dots menu button */}
      <div className={styles.menuContainer}>
        <button
          className={styles.menuButton}
          onClick={handleMenuToggle}
          aria-label="More actions"
        >
          <span className={styles.dots}>⋯</span>
        </button>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className={styles.dropdownMenu}>
            <button
              className={styles.menuItem}
              onClick={handleDeleteOption}
            >
              Delete Pin
            </button>
          </div>
        )}
      </div>

      {/* Delete confirmation dialog */}
      {showDeleteDialog && (
        <div className={styles.modalOverlay}>
          <div className={styles.confirmDialog}>
            <h2 className={styles.dialogTitle}>Are you sure?</h2>
            <p className={styles.dialogMessage}>
              If you delete this Pin, it'll be gone forever and no-one who has
              saved it will be able to view it.
            </p>
            <div className={styles.dialogButtons}>
              <button
                className={styles.cancelButton}
                onClick={handleCancelDelete}
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                className={styles.deleteButton}
                onClick={handleConfirmDelete}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Delete;
