import styles from "./OptionsListItem.module.css";

export default function OptionsListItem({ label, onClick }) {
  return (
    <button onClick={onClick} className={styles.optionItem}>
      {label}
    </button>
  );
}
