const RenderMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : '0';

  const renderStatusMessage = () => {
    console.log(`isXnext is = ${isXNext}`);
    console.log(`Next Player is = ${nextPlayer}`);
    if (winner) {
      return (
        <>
          <h2>
            Winner is{' '}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
              {winner}
            </span>
          </h2>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          <h2>
            <span className="text-orange">
              <b>0</b>
            </span>{' '}
            and{' '}
            <span className="text-green">
              <b>X</b>
            </span>{' '}
            Tied
          </h2>
        </>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          <h2>
            Next Player is {'  '}
            <span className={isXNext ? 'text-green' : 'text-orange'}>
              <b>{nextPlayer}</b>
            </span>
          </h2>
        </>
      );
    }

    return null;
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};
export default RenderMessage;
