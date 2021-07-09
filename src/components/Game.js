import React, {useState} from 'react';
import '../components/Game.css'
import Board from "./Board";
import {calculateWinner} from "../helper";

function Game() {

    const [board, setBoard] = useState(Array(9).fill(null));

    const [xIsNext, setXisNext] = useState(true);

    const winner = calculateWinner(board);

    const handleClick = (index) => {
        const newBoard = [...board];
        //определить был ли клик на доске или игра закончена

        if (winner || newBoard[index])
            return; //Если у ячейки есть какой то индекс, или если уже есть победитель то мы ничего не делаем
        //определить чей ход
        newBoard[index] = xIsNext ? 'X' : 'O'
        //Обновить state
        setBoard(newBoard);
        setXisNext(!xIsNext);
    }

    const startNewGame = () => {
        return (
            <button className="start__btn"
                    onClick={() => setBoard(Array(9).fill(null))}>Clear the board</button>
        )
    }

    return (
        <div className="wrapper">
            <h1>Tic Tac Toe</h1>
            {startNewGame()}
            <Board squares={board} click={handleClick}/>
            <p>
                { winner ? 'Winner ' + winner : 'Now is ' + (xIsNext ? 'X' : "O") + "'s turn"  }
            </p>
        </div>
    )
}

export default Game;

