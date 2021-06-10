import React from 'react'

import useQuizEngine from "../hooks/useQuizEngine"
import Question from './Question'
import ProgressBar from './ProgressBar'
import Display from './Display'

export default function App() {
    const { currentCountry, allAnswers, generateNewQuestion, isGameRunning, isGameOver, round, roundsTotal, score, message, startGame, validateAnswer, isAnswerSubmitted } = useQuizEngine()

    return (
        <div className="screen">
            <div className="game-container">
                <div className="header">
                    <h1>Flags <br /> Quiz</h1>
                    {!isGameRunning
                        ? <button onClick={startGame} className="btn start">Start <br /> game</button>
                        : <Display textLeft="Score" numLeft={score} textRight="Round" numRight={round} />
                    }
                </div>
                {isGameOver &&
                    <div>
                        <p>Game over!</p>
                        <Display textLeft="Correct" numLeft={score} textRight="Rounds" numRight={roundsTotal} />
                    </div>}
                <p>{message}</p>
                {isGameRunning &&
                    <>
                        <ProgressBar round={round} roundsTotal={roundsTotal} />
                        <Question
                            currentCountry={currentCountry}
                            allAnswers={allAnswers}
                            validateAnswer={validateAnswer}
                            isAnswerSubmitted={isAnswerSubmitted}
                        />
                        <button onClick={generateNewQuestion} disabled={!isAnswerSubmitted} className="btn next">Next</button>
                    </>
                }
            </div>
        </div>
    )
}
