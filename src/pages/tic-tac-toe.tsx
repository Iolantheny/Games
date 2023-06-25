import React, { useState } from "react";
import BackLink from "../components/BackLink";

type BoardProps = {
  value: string;
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

function Tile({ value, handleClick }: BoardProps) {
  return (
    <div className="tile" onClick={handleClick}>
      {value}
    </div>
  );
}

const TicTacToe = () => {
  const [board, setBoard] = useState<Array<string>>(Array(9).fill(null));
  const [player, setPlayer] = useState<string>("X");

  const result = (board: Array<string>) => {
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
      const [x, y, z] = lines[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }

    return null;
  };
  const handleClick = (i: number) => {
    if (board[i] || result(board)) {
      return;
    }

    const nextTile = board.slice();

    if (player === "X") {
      nextTile[i] = "X";
      setBoard(nextTile);
      setPlayer("O");
    } else {
      nextTile[i] = "O";
      setBoard(nextTile);
      setPlayer("X");
    }
  };

  const Winner = result(board);

  const ResultGame = () => {
    if (Winner) {
      return <div className="announce">Player {Winner} is a Winner!</div>;
    } else {
      return null;
    }
  };

  const Reset = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
  };

  return (
    <div className="tictactoe">
      <BackLink />
      <h1>Tic Tac Toe</h1>
      <section className="board">
        <Tile value={board[0]} handleClick={() => handleClick(0)} />
        <Tile value={board[1]} handleClick={() => handleClick(1)} />
        <Tile value={board[2]} handleClick={() => handleClick(2)} />
        <Tile value={board[3]} handleClick={() => handleClick(3)} />
        <Tile value={board[4]} handleClick={() => handleClick(4)} />
        <Tile value={board[5]} handleClick={() => handleClick(5)} />
        <Tile value={board[6]} handleClick={() => handleClick(6)} />
        <Tile value={board[7]} handleClick={() => handleClick(7)} />
        <Tile value={board[8]} handleClick={() => handleClick(8)} />
      </section>
      <ResultGame />
      <button className="reset" onClick={() => Reset()}>
        reset
      </button>
    </div>
  );
};

export default TicTacToe;
