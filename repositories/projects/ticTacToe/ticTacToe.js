const GameBoard = (() => {
  // store the board and update
  const board = ["", "", "", "", "", "", "", "", ""]; // 3x3

  const getBoard = () => board;

  const setMark = (index, mark) => {
    if (board[index] === "") {
      board[index] = mark;
      return true; // success
    } else {
      return false; // spot alr taken
    }
  };

  const reset = () => {
    for (let i = 0; i < board.length; i++) board[i] = "";
  };

  return { getBoard, setMark, reset };
})();

// player factory
const Player = (name, mark) => {
  return { name, mark }; // mark is 'x' or 'o'
};

// GameController
// eslint-disable-next-line no-unused-vars
const GameController = (() => {
  const player1 = Player("player 1", "X");
  const player2 = Player("player 2", "O");

  let currentPlayer = player1;
  let gameOver = false;

  const playRound = (index) => {
    if (gameOver) return;

    if (!GameBoard.setMark(index, currentPlayer.mark)) {
      return "Spot taken";
    }

    if (checkWinner()) {
      gameOver = true;
      return `${currentPlayer.name} wins!`;
    }

    if (checkTie()) {
      gameOver = true;
      return `It's a tie`;
    }
    switchPlayer();
  };

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const checkWinner = () => {
    const b = GameBoard.getBoard();
    const wins = [
      // rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // cols
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];

    return wins.some((combo) =>
      combo.every((i) => b[i] === currentPlayer.mark)
    );
  };

  const checkTie = () => GameBoard.getBoard().every((cell) => cell !== "");

  const getCurrentPlayer = () => currentPlayer;

  const resetGame = () => {
    GameBoard.reset();
    currentPlayer = player1;
    gameOver = false;
  };

  return { playRound, getCurrentPlayer, resetGame };
})();
