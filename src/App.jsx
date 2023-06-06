import './styles.scss';
import { useState } from 'react';
import Board from './Components/Board';
import { calculateWinner } from './Winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXnext ? 'X' : '0';

  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next Player is ${nextPlayer}`;

  const handleSqueareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) return;

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
  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board handleSqueareClick={handleSqueareClick} squares={squares} />
    </div>
  );
}

export default App;
