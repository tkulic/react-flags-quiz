import React from 'react'

export default function Display(props) {
    return (
        <div className="game-status-display">
            <div className="scoreboard">
                <p className="score-title">{props.textLeft}</p>
                <p className="score-num">{props.numLeft}</p>
            </div>
            <div className="scoreboard">
                <p className="score-title">{props.textRight}</p>
                <p className="score-num">{props.numRight}</p>
            </div>
        </div>
    )
}
