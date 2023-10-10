import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [addtask, setAddtask] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleClick = () => {
    const newTask = {
      id: Math.floor(Math.random() * 30),
      taskName: task,
    };
    setAddtask([...addtask, newTask]);
  };
  const deleteTask = (id) => {
    // const newList = addtask.filter((task) => {
    //   if (task === taskName) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });
    setAddtask(addtask.filter((task) => task.id !== id));
  };
  return (
    <>
      <div className="pt-4 flex  justify-start  gap-2 m-4">
        <div className="flex gap-2 justify-center w-full">
          <label
            class="block text-black text-sm font-bold mb-2 pt-2"
            for="username"
          >
            Username
          </label>
          <input
            className="border rounded border-black p-2"
            onChange={handleChange}
            id="username"
            type="text"
          />
          <button
            type="button"
            className="rounded px-6 pb-2 bg-blue-700 text-white items-center justify-center pt-1"
            onClick={handleClick}
          >
            Add task
          </button>
        </div>
      </div>
      <div className=" w-full  flex flex-col justify-center items-center ">
        {addtask.map((task) => {
          return (
            <div className="flex flex-row gap-3 pb-2">
              <h1 className="text-4xl">{task.taskName}</h1>
              <h2 className="text-2xl">{task.id} </h2>
              <button
                type="button"
                className="rounded px-4  bg-blue-700 text-white items-center justify-center pt-1"
                onClick={() => deleteTask(task.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
