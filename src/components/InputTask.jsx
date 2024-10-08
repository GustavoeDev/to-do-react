import { PlusCircle } from "phosphor-react";
import styles from "./InputTask.module.css";
import { useState } from "react";

export function InputTask({ addTask }) {
  const [itemTask, setItemTask] = useState("");

  function getValueTask(event) {
    setItemTask(event.target.value);
  }

  function handleAddTask() {
    addTask(itemTask);
    setItemTask("");
  }

  function handleKeyDown() {
    if (event.key === "Enter") {
      addTask(itemTask);
      setItemTask("");
    }
  }

  return (
    <div className={styles.inputTask}>
      <input
        className={styles.addTask}
        type="text"
        value={itemTask}
        onChange={getValueTask}
        onKeyDown={handleKeyDown}
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={handleAddTask}>
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
