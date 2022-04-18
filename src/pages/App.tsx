import { useState } from "react";
import Form from "../components/Form";
import { List } from "../components/List";
import { StopWatch } from "../components/Stopwatch";
import { ITask } from "../types/ITasks";
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <StopWatch />
    </div>
  );
}

export default App;
