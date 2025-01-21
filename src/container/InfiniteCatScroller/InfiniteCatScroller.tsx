'use client'
import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getCatImages } from '~/api/api'
import CatOverLordModal from './components/CatOverLordModal'
import Image from 'next/image'
import Button from '~/components/Button/Button'
import { useRouter } from 'next/navigation'

function InfiniteCatScroller() {
    const [catList, setCatList] = useState<string[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const getCatList = async () => {
        const res = await getCatImages()
        setCatList((prev) => [...prev, res])
    }
    useEffect(() => {
        getCatList()
    }, [])
    return (
        <div className="flex flex-col items-center">
            <CatOverLordModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <Button
                title="< Back"
                onClick={() => {
                    router.push('/')
                }}
            />
            <button onClick={() => setIsOpen(true)}>
                Summon the Cat Overlord
            </button>
            <InfiniteScroll
                className="flex flex-col items-center"
                dataLength={catList.length}
                next={getCatList}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {catList.map((item, index) => (
                    <Image
                        key={index}
                        src={item}
                        alt=""
                        width={1300}
                        height={1080}
                    />
                ))}
            </InfiniteScroll>
        </div>
    )
}

export default InfiniteCatScroller
