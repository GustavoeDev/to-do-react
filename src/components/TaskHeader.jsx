import styles from "./TaskHeader.module.css";

export function TaskHeader({ totalTasks, totalConcludeTasks }) {
  return (
    <div className={styles.taskHeader}>
      <div className={styles.createHeader}>
        <a href="#">Tarefas criadas</a>
        <span>{totalTasks}</span>
      </div>

      <div className={styles.concludeHeader}>
        <a href="#">Concluídas</a>
        <span>
          {totalTasks === 0
            ? totalConcludeTasks
            : `${totalConcludeTasks} de ${totalTasks}`}
        </span>
      </div>
    </div>
  );
}
