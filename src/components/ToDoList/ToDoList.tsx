import { Task } from '../../types/todo.ts';
import { useState } from 'react';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';
import styles from './ToDoList.module.scss';

type TToDoListProps = {
  title: string;
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
};

export const ToDoList = (props: TToDoListProps) => {
  const [value, setValue] = useState<string>('');

  return (
    <div className={styles.todoList}>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.addTaskForm}>
        <input
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Введите название задачи..."
        />
        <button
          className={styles.addButton}
          onClick={() => {
            if (value.trim()) {
              props.addTask(value);
              setValue('');
            }
          }}
        >
          +
        </button>
      </div>
      <div className={styles.filterButtons}>
        <button
          className={
            props.filter === 'all' ? styles.activeFilter : styles.filterButton
          }
          onClick={() => props.setFilter('all')}
        >
          Все
        </button>
        <button
          className={
            props.filter === 'active'
              ? styles.activeFilter
              : styles.filterButton
          }
          onClick={() => props.setFilter('active')}
        >
          Активные
        </button>
        <button
          className={
            props.filter === 'completed'
              ? styles.activeFilter
              : styles.filterButton
          }
          onClick={() => props.setFilter('completed')}
        >
          Выполненные
        </button>
      </div>
      {props.tasks.length === 0 ? (
        <p className={styles.emptyMessage}>Тасок нет</p>
      ) : (
        <ul className={styles.taskList}>
          {props.tasks.map((task) => {
            return (
              <li key={task.id} className={styles.taskItem}>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  className={styles.taskCheckbox}
                />
                <span className={styles.taskTitle}>{task.title}</span>
                <DeleteIcon
                  onClick={() => {
                    console.log(
                      'Button clicked for task:',
                      task.id,
                      task.title
                    );
                    props.removeTask(task.id);
                  }}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
