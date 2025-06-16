import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Delete.module.css";

function Delete({ pinId }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  // Debug log when component mounts or pinId changes
  useEffect(() => {
    console.log("Delete component received pinId:", pinId);
  }, [pinId]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDeleteOption = () => {
    setMenuOpen(false);
    setShowDeleteDialog(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
    setError(null);
  };

  const handleConfirmDelete = async () => {
    // Validate pinId
    if (!pinId) {
      setError("Pin ID is missing");
      return;
    }

    // Parse pinId to ensure it's a number (backend expects a number)
    const numericPinId = parseInt(pinId, 10);
    if (isNaN(numericPinId)) {
      setError("Invalid Pin ID format");
      return;
    }

    setIsDeleting(true);
    try {
      // Using fetch instead of axios to avoid dependency issues
      const response = await fetch(`/api/pin/${numericPinId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include" // Important for authentication
      });

      if (!response.ok) {
        // Handle specific HTTP error statuses
        if (response.status === 401) {
          throw new Error("You must be logged in to delete this pin");
        } else if (response.status === 403) {
          throw new Error("You don't have permission to delete this pin");
        } else {
          throw new Error(`Failed to delete pin: ${response.status}`);
        }
      }

      // Success - redirect to explore page
      setIsDeleting(false);
      setShowDeleteDialog(false);
      navigate("/explore");
    } catch (error) {
      console.error("Error deleting pin:", error);
      setError(error.message || "Failed to delete pin");
      setIsDeleting(false);
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
            <button className={styles.menuItem} onClick={handleDeleteOption}>
              Delete Pin
            </button>
          </div>
        )}
      </div>

      {/* Delete confirmation dialog */}
      {showDeleteDialog && (
        <div className={styles.modalOverlay} onClick={handleCancelDelete}>
          <div
            className={styles.confirmDialog}
            onClick={e => e.stopPropagation()}
          >
            <h2 className={styles.dialogTitle}>Are you sure?</h2>
            <p className={styles.dialogMessage}>
              If you delete this Pin, it'll be gone forever and no-one who has
              saved it will be able to view it.
            </p>

            {/* Display error message if there is one */}
            {error && <p className={styles.errorMessage}>{error}</p>}

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
