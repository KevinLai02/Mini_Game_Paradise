export interface CheckWrongProps {
    item: string
    list: IngredientItem[]
}

export interface IngredientItem {
    name: string
    color: string
}

export enum INGREDIENT {
    BREAD = 'bread',
    LETTUCE = 'lettuce',
    TOMATO = 'tomato',
    CHEESE = 'cheese',
    BACON = 'bacon',
    PICKLES = 'pickles',
    PEANUT_BUTTER = 'peanut butter',
}

export enum INGREDIENT_COLOR {
    BREAD = '#CD8C4E',
    LETTUCE = '#A3BF4F',
    TOMATO = '#DC3F34',
    CHEESE = '#F6CF8C',
    BACON = '#831F21',
    PICKLES = '#746B35',
    PEANUT_BUTTER = '#A5500C',
}
