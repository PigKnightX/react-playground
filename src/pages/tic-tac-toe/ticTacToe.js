import React, { useState } from 'react';
import './ticTacToe.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board() {
  const status = 'Next player: X';
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => {handleClick(i)}}
      />
    );
  };
  const handleClick = (i) => {
    console.log('click:' + i);

    const tempSquares = squares.slice(); // 数组拷贝
    tempSquares[i] = 'X';
    setSquares(tempSquares)
  }

  return (
    <div>
      <div className="status">{status}</div>
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
}

function TicTacToe() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        {/* <div>{status}</div> */}
        {/* <ol>TODO</ol> */}
      </div>
    </div>
  );
}

export default TicTacToe;