import React from 'react'

export default function Question(props) {
    return (
        <div className="question-container">
            <img className="flag" src={`https://flagcdn.com/80x60/${props.currentCountry.ISOCode}.png`} alt="You won't find the answer here! 😉" />
            <div className="answers-container">
                {props.allAnswers.map(country => {
                    const borderStyle = country.isCorrectAnswer ? { border: "1px solid #4D751A" } : { border: "1px solid #D11D1A" }
                    return (
                        <button
                            className="answer-button"
                            onClick={() => props.validateAnswer(country.ISOCode)}
                            key={country.ISOCode}
                            disabled={props.isAnswerSubmitted}
                            style={props.isAnswerSubmitted ? borderStyle : null}
                        >
                            {country.name}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

