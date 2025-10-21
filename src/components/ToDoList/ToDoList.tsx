import { Task } from '../../types/todo.ts';
import { useState } from 'react';

type Props = {
  title: string;
  tasks: Task[];
  addTask: (title: string) => void;
};

export const ToDoList = ({ title, addTask, tasks }: Props) => {
  const [value, setValue] = useState<string>('');
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button
          onClick={() => {
            if (value.trim()) {
              addTask(value);
              setValue('');
            }
          }}
        >
          +
        </button>
      </div>
      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <button>x</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
