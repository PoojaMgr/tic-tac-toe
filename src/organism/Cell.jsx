import "./Cell.css";

export default function Cell({ value, handleClick, xIsNext }) {
  return (
    <div className={`content-cell ${xIsNext ? 'x_style': 'o_style'}`} onClick={handleClick}>
      {value}
    </div>
  );
}
