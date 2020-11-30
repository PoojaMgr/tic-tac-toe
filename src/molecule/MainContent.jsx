import { useState } from "react";
import Cell from "../organism/Cell";
import "./MainContent.css";

export default function MainContent() {
  const [cellPosition, setCellPosition] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(false);
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleClick = (i) => {
    debugger;
    const cell = cellPosition.slice();
    if (calculateWinner(cellPosition) || cellPosition[i]) {
      return;
    }
    cell[i] = xIsNext ? "X" : "O";
    setCellPosition(cell);
    setXIsNext(!xIsNext);
  };
  const calculateWinner = (cellPosition) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        cellPosition[a] &&
        cellPosition[a] === cellPosition[b] &&
        cellPosition[a] === cellPosition[c]
      ) {
        return cellPosition[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(cellPosition);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  console.log(winner, 'winner')
  return (
    <div className="mainContent">
      {arr.map((index) => (
          <Cell
            value={cellPosition[index]}
            handleClick={() => handleClick(index)}
          />
      ))}
    </div>
  );
}
