import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete:false,
    };
    setTodoList([...todoList, task]);
    
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(todoList.map((task) => 
    {
      if(task.id===id){
        
        return {...task,complete:true}
      }else
      return task
     

    }));
  };

  return (
    <div className="App">
      
      <div className="addTask">
      
        <input onChange={handleChange} />
        <button onClick={addTask} type ="submit">Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              id={task.id}
              taskName={task.taskName}
              completed={task.complete}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
