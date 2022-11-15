import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';
const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(dummyTodos);

  const handleInputChange = (value) => setInputValue(value);
  const handleAddTodo = () => {
    if (inputValue.trim().length === 0) return;
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.random() * 100,
        title: inputValue,
        isDone: false,
      },
    ]);
    setInputValue('');
  };
  const handleToggleDone = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, isDone: true };
        return todo;
      });
    });
  };

  const handleChangeMode = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, isEdit: true };
        return todo;
      });
    });
  };

  const handleOnSave = (todoId, todoTitle) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId)
          return { ...todo, title: todoTitle, isEdit: false };
        return todo;
      });
    });
  };

  const handleDetele = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };
  return (
    <div>
      TodoPage
      <Header userName={''} />
      <TodoInput
        inputValue={inputValue}
        onChange={handleInputChange}
        onAddTodo={handleAddTodo}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode}
        onSave={handleOnSave}
        onDelete={handleDetele}
      />
      <Footer todosLength={todos.length} />
    </div>
  );
};

export default TodoPage;
