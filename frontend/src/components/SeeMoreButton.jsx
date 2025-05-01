import React from 'react';

/**
 * A reusable "See More" button component
 * @param {Object} props - Component properties
 * @param {Function} props.onClick - Function to execute when button is clicked
 * @param {string} [props.text="See more"] - Text to display on the button
 * @param {string} [props.className] - Additional CSS class for custom styling
 * @returns {JSX.Element} - Button component
 */
const SeeMoreButton = ({ onClick, text = 'See more', className }) => (
  <button className={className} onClick={onClick} aria-label={text}>
    {text}
  </button>
);

export default SeeMoreButton;
