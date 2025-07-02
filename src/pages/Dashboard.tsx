import { Todos } from "../components/Todos";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useTodos } from "../hooks/useTodos";
import { SummaryModal } from "../components/SummaryModal";

const Dashboard: React.FC = () => {
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
    handleSummarize,
    handleCloseModal,
    summary,
    showModal,
    todos: filteredTodos,
    user,
  } = useTodos();

  return (
    <>
      <p className="m-4 text-center text-2xl">{user?.email || "Welcome"}</p>
      <div className="todoapp">
        <Header handleAddTodo={handleSave} />
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
      <button onClick={handleSummarize} className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2l4 -4m-6 6h6m-6 -4h.01M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2 -2V6a2 2 0 012 -2z"
          />
        </svg>
        <span className="px-1">Summarize tasks</span>
      </button>

      {/* Summary Modal */}
      <SummaryModal
        open={showModal}
        text={summary}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Dashboard;
