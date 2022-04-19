import { ITask } from '../../../types/ITasks';
import style from './Item.module.scss';

interface Props extends ITask {
  taskSelect: (selectedTask: ITask) => void
}

export function Item({task, time, selected, complete, id, taskSelect}: Props) {
  return (
    <li 
      className={`${style.item} 
          ${selected ? style.itemSelecionado : ''} 
          ${complete ? style.itemCompletado : '' }
        `}
      onClick={() => !complete && taskSelect({
        task,
        time,
        selected,
        complete,
        id
      })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {complete && <span className={style.concluido} aria-label='tarefa completada'></span>}
    </li>
  )
}