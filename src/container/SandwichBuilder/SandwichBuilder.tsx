'use client'
import React, { useState } from 'react'
import {
    ingredientList,
    getRandomNum,
    checkIngredientWrong,
    checkBaconWrong,
} from './constant'
import Ingredient from './components/Ingredient/Ingredient'
import Button from '~/components/Button/Button'
import { useRouter } from 'next/navigation'
import { IngredientItem, INGREDIENT, INGREDIENT_COLOR } from './types'

const SandwichBuilder = () => {
    const [sandwich, setSandwich] = useState<IngredientItem[]>([])
    const [warning, setWarning] = useState<string>()
    const router = useRouter()

    const add = (item: IngredientItem) => {
        const isIngredientWrong = checkIngredientWrong({
            item: item.name,
            list: sandwich,
        })
        const isBaconWrong = checkBaconWrong({
            item: item.name,
            list: sandwich,
        })

        if (isIngredientWrong) {
            alert("Don't put pickles and peanut butter together!")
            return
        }

        if (isBaconWrong) {
            setWarning(
                'The number of the bacons that in your sandwich is more than 5, the bacon fairy gets upset.'
            )
            return
        }
        setWarning('')
        setSandwich((prev) => [...prev, item])
    }

    const randomSandwich = () => {
        const ingredientNumber = getRandomNum(15)
        const list: IngredientItem[] = []

        for (let i = 0; i < ingredientNumber + 1; i++) {
            const index = getRandomNum(ingredientList.length)

            const isIngredientWrong = checkIngredientWrong({
                item: ingredientList[index].name,
                list,
            })
            const isBaconWrong = checkBaconWrong({
                item: ingredientList[index].name,
                list,
            })

            if (!isBaconWrong && !isIngredientWrong) {
                list.push(ingredientList[index])
            } else {
                continue
            }
        }
        setSandwich((prev) => [
            { name: INGREDIENT.BREAD, color: INGREDIENT_COLOR.BREAD },
            ...prev,
            ...list,
            { name: INGREDIENT.BREAD, color: INGREDIENT_COLOR.BREAD },
        ])
    }

    return (
        <div className="flex flex-col items-center">
            <Button
                title="< Back"
                onClick={() => {
                    router.push('/')
                }}
            />
            <div className="mt-4">
                <Button
                    className="font-bold"
                    title="Reset all"
                    onClick={() => {
                        setSandwich([])
                    }}
                />
            </div>
            <div className="mt-4">
                <Button
                    className="bg-sky-300 font-bold text-white hover:bg-sky-100"
                    title="Magic Randomizer"
                    onClick={() => {
                        setSandwich([])
                        randomSandwich()
                    }}
                />
            </div>
            <div className="flex">
                {ingredientList.map((item: IngredientItem, index: number) => (
                    <div
                        key={index}
                        className="m-3 flex flex-col justify-center"
                    >
                        <div className="p-3">
                            <Ingredient item={item.name} color={item.color} />
                        </div>
                        <Button
                            title="Add"
                            onClick={() => {
                                add(item)
                            }}
                        />
                    </div>
                ))}
            </div>
            <div style={{ color: 'red' }}>{warning}</div>
            <div className="mt-3">
                {sandwich.map((item: IngredientItem, index: number) => (
                    <div key={index} className="mt-2">
                        <Ingredient item={item.name} color={item.color} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SandwichBuilder
