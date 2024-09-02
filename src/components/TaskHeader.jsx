import styles from "./TaskHeader.module.css";

export function TaskHeader() {
  return (
    <div className={styles.taskHeader}>
      <div className={styles.createHeader}>
        <a href="#">Tarefas criadas</a>
        <span>0</span>
      </div>

      <div className={styles.concludeHeader}>
        <a href="#">Concluídas</a>
        <span>0</span>
      </div>
    </div>
  );
}
