import { Task } from '../../types/todo.ts';
import { useState } from 'react';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';
import styles from './ToDoList.module.scss';

type Props = {
  title: string;
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
  handleIsDoneTask: (taskId: string, checked: boolean) => void;
};

export const ToDoList = ({
  title,
  tasks,
  addTask,
  removeTask,
  filter,
  setFilter,
  handleIsDoneTask,
}: Props) => {
  const [value, setValue] = useState<string>('');

  return (
    <div className={styles.todoList}>
      <h3 className={styles.title}>{title}</h3>
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
            if (!value.trim()) {
              return;
            }
            addTask(value);
            setValue('');
          }}
        >
          +
        </button>
      </div>
      <div className={styles.filterButtons}>
        <button
          className={
            filter === 'all' ? styles.activeFilter : styles.filterButton
          }
          onClick={() => setFilter('all')}
        >
          Все
        </button>
        <button
          className={
            filter === 'active' ? styles.activeFilter : styles.filterButton
          }
          onClick={() => setFilter('active')}
        >
          Активные
        </button>
        <button
          className={
            filter === 'completed' ? styles.activeFilter : styles.filterButton
          }
          onClick={() => setFilter('completed')}
        >
          Выполненные
        </button>
      </div>
      {tasks.length === 0 ? (
        <p className={styles.emptyMessage}>Тасок нет</p>
      ) : (
        <ul className={styles.taskList}>
          {tasks.map((task) => {
            return (
              <li key={task.id} className={styles.taskItem}>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={(e) =>
                    handleIsDoneTask(task.id, e.currentTarget.checked)
                  }
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
                    removeTask(task.id);
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
