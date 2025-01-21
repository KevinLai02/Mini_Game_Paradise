import { CheckWrongProps } from './types'
import { INGREDIENT, INGREDIENT_COLOR } from './types'

export const ingredientList = [
    { name: INGREDIENT.BREAD, color: INGREDIENT_COLOR.BREAD },
    { name: INGREDIENT.LETTUCE, color: INGREDIENT_COLOR.LETTUCE },
    { name: INGREDIENT.TOMATO, color: INGREDIENT_COLOR.TOMATO },
    { name: INGREDIENT.CHEESE, color: INGREDIENT_COLOR.CHEESE },
    { name: INGREDIENT.BACON, color: INGREDIENT_COLOR.BACON },
    { name: INGREDIENT.PICKLES, color: INGREDIENT_COLOR.PICKLES },
    { name: INGREDIENT.PEANUT_BUTTER, color: INGREDIENT_COLOR.PEANUT_BUTTER },
]

export const getRandomNum = (max: number) => {
    return Math.floor(Math.random() * max)
}

export const checkIngredientWrong = ({ item, list }: CheckWrongProps) => {
    const isPicklesWrong = checkPicklesError({ item, list })
    const isPeanutButterWrong = checksPeanutButterWrong({ item, list })

    if (isPicklesWrong || isPeanutButterWrong) {
        return true
    }
    return false
}

export const checkBaconWrong = ({ item, list }: CheckWrongProps) => {
    const baconNumber = list.filter((e) => e.name === INGREDIENT.BACON).length
    if (baconNumber > 4 && item === INGREDIENT.BACON) {
        return true
    }
    return false
}

export const checkPicklesError = ({ item, list }: CheckWrongProps) => {
    const isPickles = list.some((item) => item.name === INGREDIENT.PICKLES)
    if (isPickles && item === INGREDIENT.PEANUT_BUTTER) {
        return true
    }
    return false
}

export const checksPeanutButterWrong = ({ item, list }: CheckWrongProps) => {
    const isPeanutButter = list.some(
        (item) => item.name === INGREDIENT.PEANUT_BUTTER
    )
    if (isPeanutButter && item === INGREDIENT.PICKLES) {
        return true
    }
    return false
}
