import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cell from "../organism/Cell";
import "./MainContent.css";
import { X, O } from "../constant";
import { calculateWinner } from "../helper/calculateWinner";
import { cellposition } from "../redux/action";

export default function MainContent() {
  const [cellPosition, setCellPosition] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(false);
  const [winnerStatus, setWinnerStatus] = useState("");
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const pagedata = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = (i) => {
    const cell = cellPosition.slice();
    cell[i] = xIsNext ? X : O;
    setCellPosition(cell);
    dispatch(cellposition(cell));
    setXIsNext(!xIsNext);
    if (calculateWinner(cellPosition) || cellPosition[i]) {
      return;
    }
  };
useEffect(() => {
  const winner = calculateWinner(cellPosition);
  if (winner) {
    setWinnerStatus(winner);
  }
}, [cellPosition])
  
  return (
    <div className="mainContent">
      {arr.map((index) => (
        <Cell
          value={cellPosition[index]}
          handleClick={() => handleClick(index)}
          xIsNext={xIsNext}
        />
      ))}

     { winnerStatus && <div id="myModal" className="winning-message">
      <div className="winning-content">
        <span className="close">&times;</span>
        <p>{winnerStatus === "O" ? `Player 1` : `Player 2`} won!</p>
      </div>
    </div>}
    </div>
  );
}
