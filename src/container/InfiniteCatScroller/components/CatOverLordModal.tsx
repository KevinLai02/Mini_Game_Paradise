import React from 'react'
import { Modal } from '@mui/material'
import Image from 'next/image'

interface PropsT {
    isOpen: boolean
    onClose: () => void
}

function CatOverLordModal({ isOpen, onClose }: PropsT) {
    return (
        <Modal
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            open={isOpen}
            onClose={onClose}
        >
            <Image
                src="/image/cat_overlord.jpg"
                alt=""
                width={600}
                height={600}
            />
        </Modal>
    )
}

export default CatOverLordModal
