import PostView from '@/libs/common/entity/PostView';
import React from 'react'

interface IPreviewContext{
    post:  PostView
}

export const PreviewContext = React.createContext<IPreviewContext>({} as IPreviewContext)