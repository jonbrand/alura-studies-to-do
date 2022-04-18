import { ITask } from '../../../types/ITasks';
import style from '../List.module.scss';

export function Item({task, time, select, complete, id}: ITask) {
  console.log('item atual: ', {task, time, select, complete, id})
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  )
}