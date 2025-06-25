import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { NavLink } from "react-router-dom";

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [board, setBoard] = useState(game.fen());

  const handleMove = (from, to) => {
    try {
      const newGame = new Chess(game.fen());
      const move = newGame.move({ from, to });
      if (move === null) {
        alert("Invalid move!");
        return;
      }
      setGame(newGame);
      setBoard(newGame.fen());
    } catch (error) {
      alert("Invalid move: " + error.message);
    }
  };

  const onDrop = (sourceSquare, targetSquare) => {
    handleMove(sourceSquare, targetSquare);
  };

  return (
    <div>
        <div className="ui inverted menu">
            <div className="ui container">
                <NavLink to="/main" className={({ isActive }) => "item" + (isActive ? " active" : "")}>
                <i className="address book icon"></i>
                Main
                </NavLink>
                <NavLink to="/chess" className={({ isActive }) => "item" + (isActive ? " active" : "")}>
                <i className="chess board icon"></i>
                Chess
                </NavLink>
            </div>
        </div>
      <h1>Chess Game</h1>
      <Chessboard
        position={board}
        onPieceDrop={onDrop}
        boardWidth={400}
      />
      <p>{game.isGameOver() ? "Game Over!" : `Turn: ${game.turn()}`}</p>
    </div>
  );
};

export default ChessGame;
