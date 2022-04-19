import { ITask } from '../../../types/ITasks';
import style from '../List.module.scss';

interface Props extends ITask {
  taskSelect: (selectedTask: ITask) => void
}

export function Item({task, time, selected, complete, id, taskSelect}: Props) {
  console.log('item atual: ', {task, time, selected, complete, id})
  return (
    <li 
      className={`${style.item} ${selected ? style.itemSelecionado : ''}`}
      onClick={() => taskSelect({
        task,
        time,
        selected,
        complete,
        id
      })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  )
}