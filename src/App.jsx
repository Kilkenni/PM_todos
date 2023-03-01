import { useState } from 'react';
import './App.css';

import NewTodoForm from './components/NewTodoForm';
import TodosTable from './components/TodosTable';
import TodoModal from './components/TodoModal';

const INIT_TODOS = [
  {
    id: 0,
    name: "Test task",
    description: "Complete test task in time",
    isDone: false,
  }
];

const INIT_MODAL = {
  showModal: false,
  todoID: null,
}

function App() {
  const [todos, setTodos] = useState([...INIT_TODOS]);
  const [todoModalData, setTodoModalData] = useState({...INIT_MODAL});

  function addTodo(todo) {
    todo.id = 0;
    if (todos.length > 0) {
      todo.id = todos.length;
    }
    setTodos([...todos, todo]);
  }

  function toggleTodoModal(todoID = undefined) {
    if (todoID !== undefined) {
      setTodoModalData({
        showModal: true,
        todoID,
      });
    }
    else {
      setTodoModalData({...INIT_MODAL}); //reset if no ID provided
    }
  }

  function onStatusChange(event) {
    const currentTodo = todos.find((todo) => todo.id === todoModalData.todoID);

    currentTodo.isDone = !currentTodo.isDone;
    const newTodos = todos.filter((todo) => todo.id !== todoModalData.todoID);
    newTodos.push(currentTodo);

    setTodos([...newTodos.sort( (todo1, todo2) => todo1.id - todo2.id)]);
  }

  const modalTodo = todos.find((todo) => todo.id === todoModalData.todoID);

  return (
    <div className="App">
      <main className="App-header">
        <NewTodoForm onSubmit={(todo) => addTodo(todo)}></NewTodoForm>
        <TodosTable todos={todos} onModal={toggleTodoModal}></TodosTable>
        {todoModalData.showModal && <TodoModal onClose={toggleTodoModal}>
          <p>Todo ID: {modalTodo.id}</p>
          <p>Name: {modalTodo.name}</p>
          <p>Description: {modalTodo.description}</p>
          <label>Completed: 
            <input type="checkbox" name="status" checked={modalTodo.isDone} onChange={onStatusChange } />
          </label>
          <br />
          <button type='button' onClick={() => toggleTodoModal()}>Close</button>
        </TodoModal>}
      </main>
    </div>
  );
}

export default App;
