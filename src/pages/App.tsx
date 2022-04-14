import Form from "../components/Form";
import { List } from "../components/List";
import { StopWatch } from "../components/Stopwatch";
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <StopWatch />
    </div>
  );
}

export default App;
