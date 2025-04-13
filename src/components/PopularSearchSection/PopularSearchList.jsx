import PopularSearchBtn from "./PopularSearchBtn";
import { mockData } from "../../assets/data.js";
import styles from "./popularSearch.module.css";
function PopularSearchList() {
  return (
    <div>
      <h2 className={styles.titleStyle}>Search popular ideas</h2>
      <ul className={styles.listStyle}>
        {mockData.popularSearch?.map((idea, idx) => {
          return <PopularSearchBtn key={idea + idx} idea={idea} />;
        })}
      </ul>
    </div>
  );
}

export default PopularSearchList;
