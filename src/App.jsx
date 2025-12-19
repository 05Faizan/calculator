import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      if (!input) return;

      const result = eval(
        input.replace(/x/g, "*").replace(/÷/g, "/")
      );

      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  // ✅ RETURN MUST BE HERE
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 w-[320px] rounded-2xl p-4 shadow-lg">

        {/* DISPLAY */}
        <div className="bg-black text-white text-right text-3xl p-4 rounded-lg mb-4 min-h-[64px]">
          {input || "0"}
        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-4 gap-3">
          <button className="btn" onClick={handleClear}>AC</button>
          <button className="btn" onClick={handleDelete}>DEL</button>
          <button className="btn" onClick={() => handleClick("%")}>%</button>
          <button className="btn" onClick={() => handleClick("÷")}>÷</button>

          <button className="btn" onClick={() => handleClick("9")}>9</button>
          <button className="btn" onClick={() => handleClick("8")}>8</button>
          <button className="btn" onClick={() => handleClick("7")}>7</button>
          <button className="btn" onClick={() => handleClick("x")}>x</button>

          <button className="btn" onClick={() => handleClick("6")}>6</button>
          <button className="btn" onClick={() => handleClick("5")}>5</button>
          <button className="btn" onClick={() => handleClick("4")}>4</button>
          <button className="btn" onClick={() => handleClick("+")}>+</button>

          <button className="btn" onClick={() => handleClick("3")}>3</button>
          <button className="btn" onClick={() => handleClick("2")}>2</button>
          <button className="btn" onClick={() => handleClick("1")}>1</button>
          <button className="btn" onClick={() => handleClick("-")}>-</button>

          <button className="btn col-span-2" onClick={() => handleClick("0")}>0</button>
          <button className="btn" onClick={() => handleClick(".")}>.</button>
          <button className="btn bg-orange-500" onClick={handleEqual}>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
