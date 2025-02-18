'use client'

import Link from 'next/link'

const Home = () => {
    return (
        <div className="flex flex-col">
            <Link href={'/InfiniteCatScroller'}>InfiniteCatScroller</Link>
            <Link href={'/SandwichBuilder'}>SandwichBuilder</Link>
            <Link href={'/TriviaQuiz'}>TriviaQuiz</Link>
        </div>
    )
}

export default Home
