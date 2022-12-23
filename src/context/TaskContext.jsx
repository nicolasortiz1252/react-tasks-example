import { createContext, useState,useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(title, description) {
    let lastIdex = 0;

    tasks.forEach((e) => {
      if (e.id > lastIdex) {
        lastIdex = e.id;
      }
    });

    const newTask = {
      id: lastIdex + 1,
      title,
      description,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((element) => element.id != id));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
