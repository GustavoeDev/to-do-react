import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { TaskHeader } from "./components/TaskHeader";
import { TaskList } from "./components/TaskList";
import { useState } from "react";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  const [task, setTask] = useState([]);
  const [concludeTask, setConcludeTask] = useState([]);

  function addTask(item) {
    setTask([...task, item]);
  }

  function addConcludeTask(item) {
    setConcludeTask([...concludeTask, item]);
  }

  function removeConcludeTask(taskDeleted) {
    const commentWithoutDeleted = concludeTask.filter((item) => {
      return item !== taskDeleted;
    });

    setConcludeTask(commentWithoutDeleted);
  }

  function deleteTask(taskDelete) {
    const taskWithoutDeleted = task.filter((item) => {
      return item !== taskDelete;
    });

    setTask(taskWithoutDeleted);
  }

  const totalTasks = task.length;

  const totalConcludeTasks = concludeTask.length;

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <InputTask addTask={addTask} />
        <main>
          <TaskHeader
            totalTasks={totalTasks}
            totalConcludeTasks={totalConcludeTasks}
          />
          <div className={styles.tasks}>
            {task.map((task, index) => {
              return (
                <TaskList
                  key={index}
                  content={task}
                  onDeleteTask={deleteTask}
                  onAddConcludeTask={addConcludeTask}
                  onRemoveConcludeTask={removeConcludeTask}
                />
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
