import { Props } from './types'
import classNames from 'classnames'

const Button = ({ title, className, onClick }: Props) => {
    return (
        <button
            className={classNames(
                'flex justify-center rounded-lg bg-gray-200 px-4 py-1 shadow hover:bg-gray-100',
                className
            )}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button
