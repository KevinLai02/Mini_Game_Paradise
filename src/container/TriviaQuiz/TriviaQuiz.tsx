'use client'
import React, { useState } from 'react'
import {
    testList,
    colors,
    getRandomNumber,
    checkAnswerCorrect,
} from './constants'
import { Question } from './components/Question/Question'
import Button from '~/components/Button/Button'

function TriviaQuiz() {
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [randomBackGround, setRandomBackGround] = useState('')
    const [message, setMessage] = useState('')

    const failAudio = new Audio('/audios/fail.mp3')
    const successAudio = new Audio('/audios/success.mp3')

    const getRandomGradient = () => {
        const color1 = colors[getRandomNumber(colors.length)]
        const color2 = colors[getRandomNumber(colors.length)]
        const color3 = colors[getRandomNumber(colors.length)]
        const randomAngle = getRandomNumber(360)

        setRandomBackGround(
            `linear-gradient(${randomAngle}deg, ${color1}, ${color2}, ${color3})`
        )
    }

    const clickChoice = ({
        ans,
        userAns,
    }: {
        ans: string
        userAns: string
    }) => {
        const isCorrect = checkAnswerCorrect({ ans, userAns })

        if (isCorrect) {
            setScore((prev) => (prev += 1))
            setMessage('You had one job!')
        } else {
            failAudio.play()
            getRandomGradient()
            setMessage(
                `Come on!! Even a potato could guess better. The answer is (${ans})`
            )
        }

        if (currentQuestion >= 5) {
            checkWin(isCorrect)
        }
    }

    const checkWin = (isCorrect: boolean) => {
        if (score === 4 && isCorrect) {
            successAudio.play()
            setMessage(
                'You win the game because you answered them all correctly!'
            )
        } else {
            setMessage('More harder! You can win the game by all correct!')
        }
    }

    const goToNextQuestion = () => {
        setRandomBackGround('')
        setMessage('')
        setCurrentQuestion((prev) => (prev += 1))
    }

    const resetAll = () => {
        setCurrentQuestion(1)
        setScore(0)
        setRandomBackGround('')
        setMessage('')
    }

    return (
        <div
            className="flex h-screen flex-col items-center justify-center"
            style={{ backgroundImage: randomBackGround }}
        >
            <div className="text-3xl font-bold text-red-500">{message}</div>
            <div className="mb-5 flex text-3xl font-bold">
                <div>Your score:</div>
                <div>{score}/5</div>
            </div>
            {testList.map((data) => (
                <div key={data.id}>
                    {currentQuestion === data.id && (
                        <Question
                            id={data.id}
                            value={data.value}
                            ans={data.ans}
                            section={data.selection}
                            buttonClick={clickChoice}
                            disable={!!message}
                        />
                    )}
                </div>
            ))}
            <div className="mt-5 flex flex-col justify-center">
                {message && (
                    <>
                        {currentQuestion < 5 && (
                            <Button
                                title="Go to next"
                                onClick={goToNextQuestion}
                            />
                        )}
                        {currentQuestion >= 5 && (
                            <Button title="Play again" onClick={resetAll} />
                        )}
                        {currentQuestion >= 5 && score === 0 && (
                            <Button
                                className="mt-5 bg-purple-300"
                                title="Consolation prize"
                                onClick={() => {
                                    resetAll()
                                    window.open(
                                        'https://www.youtube.com/shorts/aCgP8BFjrw4'
                                    )
                                }}
                            />
                        )}
                        {score === 5 && (
                            <Button
                                className="mt-5 bg-yellow-300"
                                title="Big prize!!!!"
                                onClick={() => {
                                    resetAll()
                                    window.open(
                                        'https://www.youtube.com/watch?v=xvFZjo5PgG0'
                                    )
                                }}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default TriviaQuiz
