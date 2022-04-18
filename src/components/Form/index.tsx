import React from "react";
import { ITask } from "../../types/ITasks";
import Button from "../Button";
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component <{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
  state = {
    task: '',
    time: '00:00:00'
  }

  taskAdd(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTasks(oldTasks => 
      [
        ...oldTasks, 
      { 
        ...this.state,
        select: false,
        complete: false,
        id: uuidv4()
      }
    ]
  );
    this.setState({
      task: '',
      time: '00:00'
    });
  };

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.taskAdd.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor='tarefa'>
            Adicione um novo estudo
          </label>
          <input
            type='text'
            name='tarefa'
            id='tarefa'
            value={this.state.task}
            onChange={evento => this.setState({ ...this.state, task: evento.target.value })}
            placeholder='O que você quer estudar'
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor='tempo'>
            Tempo
          </label>
          <input
            type='time'
            step='1'
            name='tempo'
            id='tempo'
            value={this.state.time}
            onChange={evento => this.setState({ ...this.state, time: evento.target.value })}
            min='00:00:00'
            max='12:00:00'
            required
          />
          <Button type='submit'>
            Adicionar
          </Button>
        </div>
      </form>
    )
  }
}

export default Form;