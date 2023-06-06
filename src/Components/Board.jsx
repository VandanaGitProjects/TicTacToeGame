import Square from './Square';
import { useState } from 'react';
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXNext] = useState(false);

  const handleSqueareClick = clickedPosition => {
    if (squares[clickedPosition]) return;
    setSquares(squares => {
      return squares.map((squeareValue, position) => {
        if (clickedPosition === position) {
          return isXnext ? 'X' : '0';
        }
        return squeareValue;
      });
    });
    setIsXNext(currentIsXNext => !currentIsXNext);
  };
  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handleSqueareClick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
