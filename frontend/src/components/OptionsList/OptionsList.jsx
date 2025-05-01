import { useState, useRef, useEffect } from 'react';
import styles from './OptionsList.module.css';
import OptionsListItem from './OptionsListItem';

/* example*/
const options = [
  {
    label: 'Download image',
    action: () => {
      // Implement actual download functionality
      // Example: downloadImage(imageUrl)
    },
  },
  {
    label: 'Hide Pin',
    action: () => {
      // Implement hide pin functionality
      // Example: hidePinFromFeed(pinId)
    },
  },
  {
    label: 'Report Pin',
    action: () => {
      // Implement report functionality
      // Example: openReportDialog(pinId)
    },
  },
  {
    label: 'Get Pin embed code',
    action: () => {
      // Implement embed code generation
      // Example: generateEmbedCode(pinId)
    },
  },
];

export default function OptionsList() {
  /* Open/Close logic*/
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function ClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', ClickOutside);
    return () => document.removeEventListener('mousedown', ClickOutside);
  }, []);

  return (
    <div className={styles.optionsList} ref={ref}>
      <button className={styles.button} onClick={() => setOpen(!open)}>
        {/* TO DO add icon */}
        Option List
      </button>
      {open && (
        <div className={styles.menu}>
          {options.map((option, index) => (
            <OptionsListItem
              key={index}
              label={option.label}
              onClick={() => {
                option.action();
                setOpen(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
