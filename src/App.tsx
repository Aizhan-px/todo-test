import { Layout } from './components/Layout/Layout.tsx';
import { useState } from 'react';
import { Task } from './types/todo.ts';
import { v1 } from 'uuid';
import { ToDoList } from './components/ToDoList/ToDoList.tsx';
import { FilterBtn } from './components/FilterBtn.tsx';

export function App() {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [tasks, setTasks] = useState<Task[]>([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'CSS', isDone: false },
    { id: v1(), title: 'API', isDone: false },
    { id: v1(), title: 'useEffect', isDone: false },
    { id: v1(), title: 'Java', isDone: false },
  ]);
  console.log(setTasks);

  let filteredTasks = tasks;
  if (filter === 'active') {
    filteredTasks = tasks.filter((t) => !t.isDone);
  } else if (filter === 'completed') {
    filteredTasks = tasks.filter((t) => t.isDone);
  }

  return (
    <Layout>
      <p>Старт разработки...</p>
      <ToDoList title={'What to learn'} tasks={filteredTasks} />
      <FilterBtn onClickFilter={(filterValue) => setFilter(filterValue)} />
    </Layout>
  );
}
