import { Layout } from './components/Layout/Layout.tsx';
import { useState } from 'react';
import { Task } from './types/todo.ts';
import { v1 } from 'uuid';
import { ToDoList } from './components/ToDoList/ToDoList.tsx';

export function App() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState<Task[]>([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
  ]);
  const addTask = (title: string) => {
    if (title.trim()) {
      const newTask: Task = {
        id: v1(),
        title: title.trim(),
        isDone: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const removeTask = (id: string) => {
    console.log('Removing task with id:', id);
    console.log('Current tasks:', tasks);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Фильтрация задач
  let filteredTasks = tasks;
  if (filter === 'active') {
    filteredTasks = tasks.filter((task) => task.isDone === false);
  }
  if (filter === 'completed') {
    filteredTasks = tasks.filter((task) => task.isDone === true);
  }

  return (
    <Layout>
      <ToDoList
        addTask={addTask}
        removeTask={removeTask}
        title={'What to learn'}
        tasks={filteredTasks}
        filter={filter}
        setFilter={setFilter}
      />
    </Layout>
  );
}
