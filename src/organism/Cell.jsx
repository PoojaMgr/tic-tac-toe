import { useEffect } from 'react';
import "./Cell.css";

export default function Cell({ value, handleClick }) {
    useEffect(() => {
        let div = document.getElementsByClassName("content-cell")[0];
        div.addEventListener("click", function (event) {
          alert("Hi!");
        });
    })

  return (
    <div className="content-cell" onClick={handleClick}>
      {value}
    </div>
  );
}
