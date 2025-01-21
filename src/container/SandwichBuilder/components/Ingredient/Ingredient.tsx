import { Props } from './types'

const Ingredient = ({ item, color }: Props) => {
    console.log(color)

    return (
        <div
            className={`bg-[${color}] rounded-full px-3 text-center font-bold text-white`}
            style={{ backgroundColor: color }}
        >
            {item}
        </div>
    )
}

export default Ingredient
