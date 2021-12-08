import { PreviewContext } from '@/components/preview/PreviewContext'
import PostView from '@/libs/common/entity/PostView'
import React from 'react'

interface Props {
    post: PostView,
    children: React.ReactNode
}

const PreviewContentProvider = (props: Props) => {
    return (
        <PreviewContext.Provider value={{post:props.post}}>
            {props.children}
        </PreviewContext.Provider>
    )
}

export default PreviewContentProvider
