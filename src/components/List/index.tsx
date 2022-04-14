import { Item } from "./Item";
import style from './List.module.scss';

export function List () {
  const tasks = [
    {
      task: 'React',
      time: '02:00:00'
    },
    {
      task: 'Javascript',
      time: '01:30:00'
    },
    {
      task: 'Typescript',
      time: '03:30:00'
    }
  ]

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