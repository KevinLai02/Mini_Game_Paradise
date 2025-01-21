import React from 'react'
import { useRouter } from 'next/navigation'
export default function BackButton() {
    const router = useRouter()
    return (
        <button
            className="flex w-20 justify-center rounded-lg bg-gray-200 hover:bg-gray-100"
            onClick={() => {
                router.push('/')
            }}
        >
            {'<'} 返回
        </button>
    )
}
