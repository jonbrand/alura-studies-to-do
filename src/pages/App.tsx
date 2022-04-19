import { useState } from "react";
import Form from "../components/Form";
import { List } from "../components/List";
import { StopWatch } from "../components/Stopwatch";
import { ITask } from "../types/ITasks";
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function taskSelect(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  function finishTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            complete: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks} taskSelect={taskSelect}/>
      <StopWatch selected={selected} finishTask={finishTask}/>
    </div>
  );
}

export default App;
