import { PlusCircle } from "phosphor-react";
import styles from "./InputTask.module.css";

export function InputTask() {
  return (
    <div className={styles.inputTask}>
      <input
        className={styles.addTask}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
