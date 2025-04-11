import AddTodo from './components/AddTodo'
import Header from './components/Header'
import TodoList from './components/TodoList'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { use, useEffect, useState } from 'react';
import DetailTodo from './components/DetailTodo';
function App() {
  const [todo, setTodo] = useState(undefined);
  const navigate = useNavigate();
  useEffect(() => {
    if(todo !== undefined) {
      navigate('/DetailTodo');
    }
  }, [todo]);
  console.log(todo);
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<TodoList setTodo = {setTodo}  />} />
          <Route path="/addTodo" element={<AddTodo/>} />
          <Route path="/DetailTodo" element={<DetailTodo todo = {todo} />} />
        </Routes>
    </>
  )
}

export default App
