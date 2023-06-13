import './styles.scss';
import { useState } from 'react';
import Board from './Components/Board';
import RenderMessage from './Components/RenderMessage';
import History from './Components/History';
import { calculateWinner } from './Winner';

function App() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), isXNext: false },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];

  const winner = calculateWinner(gamingBoard.squares);
  console.log({ history, currentMove });

  const handleSqueareClick = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winner) return;

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : history[history.length - 1];

      const nextSquaresState = lastGamingState.squares.map(
        (squeareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXNext ? 'X' : '0';
          }

          return squeareValue;
        }
      );
      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquaresState,
        isXNext: !lastGamingState.isXNext,
      });
    });
    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <RenderMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        handleSqueareClick={handleSqueareClick}
        squares={gamingBoard.squares}
      />
      <h3>Current Game History</h3>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
