import { EditorContext } from '@/components/editor/EditorContext'
import React, { useContext } from 'react'
import ImagesBox from '@/components/common/ImagesBox'

const ImageList = () => {
    const { images, setImages } = useContext(EditorContext)
    return <ImagesBox images={images} setImages={setImages}></ImagesBox>
}

export default ImageList