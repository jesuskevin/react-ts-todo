import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useTodos } from "./hooks/useTodos";

const App: React.FC = () => {
  const {
    activeCount,
    completedCount,
    filterSelected,
    handleClearCompleted,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleSave,
    handleUpdateTitle,
    todos: filteredTodos
  } = useTodos()

  return (
    <div className="todoapp">
      <Header
        handleAddTodo={handleSave}
      />
      <Todos
        setTitle={handleUpdateTitle}
        removeTodo={handleRemove}
        onToggleCompleted={handleCompleted}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleClearCompleted={handleClearCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
