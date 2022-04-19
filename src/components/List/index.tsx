import { ITask } from "../../types/ITasks";
import { Item } from "./Item";
import style from './List.module.scss';

interface Props {
  tasks: ITask[],
  taskSelect: (selectedTask: ITask) => void
}

export function List ({ tasks, taskSelect }:Props) {
  
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
         <Item 
          taskSelect={taskSelect}
          key={item.id} // forma do react linkar com a DOM
          {...item}
         />
        ))}
      </ul>
    </aside>
  );
};