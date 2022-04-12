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
          <li key={index} className={style.item}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};