import { Trash } from "phosphor-react";
import styles from "./TaskList.module.css";

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <input type="checkbox" />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button>
        <Trash size={24} />
      </button>
    </div>
  );
}
