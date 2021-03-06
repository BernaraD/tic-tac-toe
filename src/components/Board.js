import React from 'react';
import '../components/Board.css'
import Square from "./Square";

function Board({squares, click}) {


    return (
        <div className='board'>

            {squares.map((square, i) => (
                <Square key={i}
                        value={square}
                        onClick={() => click(i)}
                />
            ))}

        </div>
    )
}

export default Board;