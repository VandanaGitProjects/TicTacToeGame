const RenderMessage = ({ winner, gamingBoard }) => {
  const { squares, isXnext } = gamingBoard;
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXnext ? 'X' : '0';

  const renderStatusMessage = () => {
    if (winner) {
      return <div>Winner is {winner}</div>;
    }
    if (!winner && noMovesLeft) {
      return <div>Game Draw</div>;
    }
    if (!winner && !noMovesLeft) {
      return <div>Next Player is {nextPlayer}</div>;
    }

    return null;
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};
export default RenderMessage;
