import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./OptionsList.module.css";
import OptionsListItem from "./OptionsListItem";

export default function OptionsList({
  icon = null,
  buttonLabel = "Options List",
  menuButtonClassName = "",
  items = []
}) {
  /* Open/Close logic*/
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    function ClickOutside(event) {
      const clickedOutsideMenu =
        menuRef.current && !menuRef.current.contains(event.target);
      const clickedOutsideButton =
        buttonRef.current && !buttonRef.current.contains(event.target);
      if (clickedOutsideMenu && clickedOutsideButton) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", ClickOutside);
    return () => document.removeEventListener("mousedown", ClickOutside);
  }, []);

  useEffect(() => {
    if (open && buttonRef.current && menuRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const menuWidth = menuRef.current.offsetWidth;
      const leftPos = rect.left + window.scrollX + (rect.width - menuWidth) / 2;
      setPosition({
        top: rect.bottom + window.scrollY,
        left: leftPos > 0 ? leftPos : 0
      });
    }
  }, [open]);

  return (
    <div className={styles.optionsList}>
      <button
        className={`${styles.button} ${menuButtonClassName}`}
        onClick={() => setOpen(prev => !prev)}
        ref={buttonRef}
      >
        {icon}
        {buttonLabel}
      </button>
      {open &&
        createPortal(
          <div
            className={styles.menu}
            ref={menuRef}
            style={{
              position: "absolute",
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: 1000
            }}
          >
            {items.map((option, index) => (
              <OptionsListItem
                key={index}
                label={option.label}
                onClick={() => {
                  option.action();
                  setOpen(false);
                }}
              />
            ))}
          </div>,
          document.body
        )}
    </div>
  );
}
