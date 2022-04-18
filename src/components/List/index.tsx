import { ITask } from "../../types/ITasks";
import { Item } from "./Item";
import style from './List.module.scss';

export function List ({ tasks }: { tasks: ITask[]}) {
  
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
         <Item 
          key={index} // forma do react linkar com a DOM
          {...item}
         />
        ))}
      </ul>
    </aside>
  );
};