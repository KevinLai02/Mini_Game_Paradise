'use client'

import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getCatImages } from '~/api/api'
import CatOverLordModal from './components/CatOverLordModal'

function InfiniteCatScroller() {
    const [catList, setCatList] = useState<string[]>([])
    const [isOpen, setIsOpen] = useState(false)

    const getCatList = async () => {
        const res = await getCatImages()
        setCatList((prev) => [...prev, res])
    }
    useEffect(() => {
        getCatList()
    }, [])
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <CatOverLordModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <button onClick={() => setIsOpen(true)}>
                Summon the Cat Overlord
            </button>
            <InfiniteScroll
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                dataLength={catList.length}
                next={getCatList}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {catList.map((item, index) => (
                    <img key={index} src={item} alt="" />
                ))}
            </InfiniteScroll>
        </div>
    )
}

export default InfiniteCatScroller
