import React from 'react'
import { QuestionT } from './types'

export const Question = (props: QuestionT) => {
    const { id, value, section, ans, disable, buttonClick } = props
    return (
        <div className="flex flex-col items-center text-2xl">
            <div>第{id}題</div>
            <div className="mt-5 flex">
                Question:
                <div className="ml-3 font-bold">{value}</div>
            </div>
            <div className="mt-10 flex">
                <button
                    className="mx-5 p-1"
                    onClick={() => {
                        buttonClick({ ans, userAns: 'a' })
                    }}
                    disabled={disable}
                >
                    (a) {section.a}
                </button>
                <button
                    className="mx-5 p-1"
                    onClick={() => {
                        buttonClick({ ans, userAns: 'b' })
                    }}
                    disabled={disable}
                >
                    (b) {section.b}
                </button>
                <button
                    className="mx-5 p-1"
                    onClick={() => {
                        buttonClick({ ans, userAns: 'c' })
                    }}
                    disabled={disable}
                >
                    (c) {section.c}
                </button>
            </div>
        </div>
    )
}
