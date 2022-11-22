import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState, useEffect } from 'react';
import { getTodos, createTodo, patchTodo, deleteTodo } from '../api/todos';

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

  useEffect(() => {
    const getTodosAsync = async () => {
      try {
        const todos = await getTodos();
        setTodos(todos.map((todo) => ({ ...todo, isEdit: false })));
      } catch (error) {
        console.error(error);
      }
    };
    getTodosAsync();
  }, []);

  const handleInputChange = (value) => setInputValue(value);

  const handleAddTodo = async () => {
    if (inputValue.trim().length === 0) return;
    try {
      const newTodo = await createTodo({ title: inputValue, isDone: false });
      setTodos((prev) => [...prev, { ...newTodo, isEdit: false }]);
    } catch (error) {
      console.error(error);
    }
    setInputValue('');
  };
  const handleToggleDone = async (id) => {
    const currentTodo = todos.find((todo) => todo.id === id);
    try {
      await patchTodo({ id, isDone: !currentTodo.isDone });
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) return { ...todo, isDone: !todo.isDone };
          return todo;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeMode = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, isEdit: true };
        return todo;
      });
    });
  };

  const handleOnSave = async (id, title) => {
    await patchTodo({ id, title });
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) return { ...todo, title, isEdit: false };
        return todo;
      });
    });
  };

  const handleDetele = async (id) => {
    try {
      await deleteTodo({ id });
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => {
          return todo.id !== id;
        });
      });
    } catch (error) {
      console.error(error);
    }
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
