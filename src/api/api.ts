export const getCatImages = async () => {
    const res = await fetch('https://cataas.com/cat', {
        method: 'get',
    })
    const imgBlob = await res.blob()
    return URL.createObjectURL(imgBlob)
}
