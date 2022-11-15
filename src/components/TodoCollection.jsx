import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onSave,
  onDelete,
  onToggleDone,
  onChangeMode,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={onToggleDone}
            onChangeMode={onChangeMode}
            onSave={onSave}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
