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
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  let status;
  const winner = calculateWinner(squares);
  if(winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => {handleClick(i)}}
      />
    );
  };

  const handleClick = (i) => {
    const tempSquares = squares.slice(); // 数组拷贝
    if (calculateWinner(tempSquares) || tempSquares[i]) {
      return;
    }
    
    tempSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(tempSquares);
    setXisNext(!xIsNext);
  }

  function calculateWinner(squares) {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
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