import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const handleClick = () => {
    if (color === "olive" || color === "yellow" || color === "green") {
      setColor("red");
    } else {
      setColor("olive");
    }
  };
  const handleClick1 = () => {
    if (color === "olive" || color === "red" || color === "green") {
      setColor("yellow");
    } else {
      setColor("olive");
    }
  };

  const handleClick2 = () => {
    if (color === "olive" || color === "red" || color === "yellow") {
      setColor("green");
    } else {
      setColor("olive");
    }
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
    <div
      className=" w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="pt-4 flex justify-center gap-2">
        <button
          type="button"
          className="rounded px-6 pb-2 bg-red-500 text-white "
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
    </div>
  );
}

export default App;
