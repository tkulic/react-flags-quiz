import { useState, useEffect } from "react"
import countries from "../data/countries"
import confetti from "canvas-confetti"
import { generateRandomIndex, shuffle, confettiEnd } from "../utils/utils"

export default function useQuizEngine() {
    const [currentCountry, setCurrentCountry] = useState({})
    const [allAnswers, setAllAnswers] = useState([])
    const [isGameRunning, setIsGameRunning] = useState(false)
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
    const [round, setRound] = useState(0)
    const [roundsTotal] = useState(10)
    const [score, setScore] = useState(0)
    const [isGameOver, setIsGameOver] = useState(false)
    const [message, setMessage] = useState("Test your knowledge of country flags!")

    function startGame() {
        setIsGameOver(false)
        setIsGameRunning(true)
        setIsAnswerSubmitted(false)
        setScore(0)
        generateNewQuestion()
    }

    function validateAnswer(ISOCode) {
        setIsAnswerSubmitted(true)
        if (currentCountry.ISOCode === ISOCode) {
            confetti()
            setScore(score + 1)
            setMessage(<span style={{ color: "green" }}>Correct!</span>)
        } else {
            setMessage(<span style={{ color: "red" }}>Wrong!</span>)
        }
    }

    function generateNewQuestion() {
        setIsAnswerSubmitted(false)
        setMessage("Which country is represented by this flag?")

        let generatedAnswers = []
        // first, generate the correct answer
        let generatedCountry = { ...countries[generateRandomIndex(countries)], isCorrectAnswer: true }
        generatedAnswers.push(generatedCountry)

        // then generate 3 wrong answers
        for (let i = 0; i < 3; i++) {
            let randomCountry = countries[generateRandomIndex(countries)]
            if (generatedAnswers.some(el => el.ISOCode === randomCountry.ISOCode)) {
                randomCountry = null
                i--
            } else {
                generatedAnswers.push({ ...randomCountry, isCorrectAnswer: false })
            }
        }
        shuffle(generatedAnswers)
        setCurrentCountry(generatedCountry)
        setAllAnswers(generatedAnswers)
        setRound(round + 1)
    }

    function endGame() {
        setIsGameOver(true)
        const scorePercentage = Math.floor(score / roundsTotal * 100)

        const endGameMessage = () => {
            if (scorePercentage <= 50) {
                return "Maybe you could do this quiz a couple more times."
            } else if (scorePercentage <= 70) {
                return "There is still some upside potential in your flags knowledge."
            } else if (scorePercentage <= 90) {
                return "You are really good at this!"
            } else {
                return "You are truly a flag-master!"
            }
        }

        confettiEnd(confetti)
        setIsGameRunning(false)
        setRound(0)
        setMessage(<span>Your score: <strong>{scorePercentage}%</strong> <br /> <span className="small">{endGameMessage()}</span></span>)
    }

    useEffect(() => {
        if (round > roundsTotal) {
            endGame()
        }
    }, [round])

    return { currentCountry, allAnswers, generateNewQuestion, isGameRunning, isGameOver, round, roundsTotal, score, message, startGame, validateAnswer, isAnswerSubmitted }
}
