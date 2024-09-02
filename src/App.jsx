import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { TaskHeader } from "./components/TaskHeader";
import { TaskList } from "./components/TaskList";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <InputTask />
        <main>
          <TaskHeader />
          <div className={styles.tasks}>
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
}
