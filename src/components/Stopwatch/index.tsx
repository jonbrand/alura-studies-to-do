import { useEffect, useState } from "react";
import { timeToSecond } from "../../common/utils/date";
import { ITask } from "../../types/ITasks";
import Button from "../Button";
import { Clock } from "./Clock";
import style from './Stopwatch.module.scss';

interface Props {
  selected: ITask | undefined,
  finishTask: () => void
}

export function StopWatch({ selected, finishTask }: Props) {
  const [timer, setTime] = useState<number>();

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if(counter > 0) {
        setTime(counter - 1);
        return regressive(counter -1);
      }
      finishTask();
    }, 1000);
  }

  useEffect(() => {
    if(selected?.time) {
      setTime(timeToSecond(String(selected?.time)))
    }
  },[selected]);
  
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock timer={timer} />
      </div>
      <Button onClick={() => regressive(timer)}>
        Começar
      </Button>
    </div>
  )
}