import { useState } from "react";

export default function Ludo() {

    const [moves, setMoves] = useState({
        blue: 0,
        red: 0,
        yellow: 0,
        green: 0
    });

    const updateBlue = () => {
        setMoves(prev => ({
            ...prev,
            blue: prev.blue + 1
        }));
    };

    const updateRed = () => {
        setMoves(prev => ({
            ...prev,
            red: prev.red + 1
        }));
    };

    const updateYellow = () => {
        setMoves(prev => ({
            ...prev,
            yellow: prev.yellow + 1
        }));
    };

    const updateGreen = () => {
        setMoves(prev => ({
            ...prev,
            green: prev.green + 1
        }));
    };

    return (
        <div className="board">

            <p>blue moves = {moves.blue}</p>
            <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
                +1
            </button>

            <p>green moves = {moves.green}</p>
            <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
                +1
            </button>

            <p>yellow moves = {moves.yellow}</p>
            <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
                +1
            </button>

            <p>red moves = {moves.red}</p>
            <button style={{ backgroundColor: "red" }} onClick={updateRed}>
                +1
            </button>

        </div>
    );
}