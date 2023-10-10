import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const [number, setNumber] = useState(0);

  // const handleClick = () => {
  //   if (color === "olive" || color === "yellow" || color === "green") {
  //     setColor("red");
  //   } else {
  //     setColor("olive");
  //   }
  // };
  // const handleClick1 = () => {
  //   if (color === "olive" || color === "red" || color === "green") {
  //     setColor("yellow");
  //   } else {
  //     setColor("olive");
  //   }
  // };

  // const handleClick2 = () => {
  //   if (color === "olive" || color === "red" || color === "yellow") {
  //     setColor("green");
  //   } else {
  //     setColor("olive");
  //   }
  // };
  const handleclick = () => {
    setNumber(number + 1);
  };
  const reduceClick = () => {
    setNumber(number - 1);
  };

  // const [save, setSave] = useState("nigga");
  // const handleClick = () => {
  //   if (save === "nigga") {
  //     setSave("help");
  //   } else {
  //     setSave("nigga");
  //   }
  // };
  return (
    <>
      <div className="pt-4 flex  justify-start  gap-2 m-4">
        {/* <button
          type="button"
          className="rounded px-6 pb-2 bg-red-700 text-white items-center justify-center "
          onClick={handleclick}
        >
          increment
        </button>
        <button
          type="button"
          className="rounded px-6 pb-2 bg-red-700 text-white items-center justify-center "
          onClick={reduceClick}
        >
          decrement
        </button>
        <h1> {number}</h1> */}

        <div className="flex gap-2 justify-center w-full">
          <label
            class="block text-black text-sm font-bold mb-2 pt-2"
            for="username"
          >
            Username
          </label>
          <input
            className="border rounded border-black"
            // class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
          />
          <button
            type="button"
            className="rounded px-6 pb-2 bg-blue-700 text-white items-center justify-center pt-1"
          >
            Add task
          </button>
        </div>
      </div>
      <div className=" w-full  flex flex-col justify-center items-center ">
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </div>
      {/* <div
        className=" w-full h-screen duration-500 flex items-end justify-center pb-4 "
        style={{ backgroundColor: color }}
      >
        <div className="pt-4 flex  justify-center  gap-2 ">
          <button
            type="button"
            className="rounded px-6 pb-2 bg-red-700 text-white items-center justify-center "
            onClick={handleClick}
          >
            RED
          </button>
          <button
            type="button"
            className="rounded px-6 pb-2 bg-yellow-500 text-white "
            onClick={handleClick1}
          >
            YELLOW
          </button>
          <button
            type="button"
            className="rounded px-6 pb-2 bg-green-500 text-white "
            onClick={handleClick2}
          >
            GREEN
          </button>
        </div>
      </div> */}
    </>
  );
}

export default App;
