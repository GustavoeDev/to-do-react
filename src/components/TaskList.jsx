import { Trash } from "phosphor-react";
import styles from "./TaskList.module.css";
import { useState } from "react";

export function TaskList({
  content,
  onDeleteTask,
  onAddConcludeTask,
  onRemoveConcludeTask,
  onMoveTask,
}) {
  const [isChecked, setIsChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(content);
    onRemoveConcludeTask(content);
  }

  function handleChangeCheckbox() {
    setIsChecked(!isChecked);
    if (!isChecked) {
      onAddConcludeTask(content);
      onMoveTask(content, true);
    } else {
      onRemoveConcludeTask(content);
      onMoveTask(content, false);
    }
  }

  return (
    <div className={styles.taskList}>
      <input type="checkbox" onChange={handleChangeCheckbox} />
      <p className={isChecked ? styles.strikethrough : ""}>{content}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
