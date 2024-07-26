import AddTodo from "./components/AddTodo"
import RenderTodo from "./components/RenderTodo"
import TodoSummary from "./components/TodoSummary"
import useTodos from "./hooks/useTodo"

function App() {
  const{  
    todos,
    setComplete,
    addTodo,
    deleteTodo,
    deleteAllCompleted
  } = useTodos();

  return (
    <main className='py-10 h-screen space-y-5 overflow-y-auto'>
      <h1 className='font-bold text-3xl text-center'>To Do 🤑</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodo onSubmit={addTodo}/>
        <RenderTodo
          todos={todos}
          onComplete={setComplete}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary
        todos={todos}
        deleteCompleted={deleteAllCompleted}
      />
    </main>
  )
}

export default App
