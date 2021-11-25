import { BodyContent } from '@/components/layout/BodyContent';
import MainLayout from '@/components/layout/MainLayout';
import PostEditor from '@/components/parts/editor/PostEditor';
import React from 'react'

const HomeView = () => {
    return (
        <MainLayout>
            <PostEditor></PostEditor>
        </MainLayout>
    )
}

export default HomeView;
