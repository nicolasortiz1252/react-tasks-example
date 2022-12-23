import TaskList from "./TaskList";
import TagForm from "./TagForm";
import { useState, useEffect } from "react";

function App() {


  return (
    <div className="bg-zinc-900 min-h-screen h-full">
      <div className="container mx-auto p-10">
        <TagForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
