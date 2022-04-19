import style from './Clock.module.scss';

interface Props {
  timer: number | undefined
}

export function Clock({ timer = 0 }: Props) {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0');
  const [secondTen, secondUnit] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.relogioNumero}>{minuteTen}</span>
      <span className={style.relogioNumero}>{minuteUnit}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondTen}</span>
      <span className={style.relogioNumero}>{secondUnit}</span>
    </>
  )
}