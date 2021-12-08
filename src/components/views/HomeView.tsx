import MainLayout from '@/components/layout/MainLayout';
import PostEditor from '@/components/editor/PostEditor';
import React from 'react'
import PostList from '@/components/preview/PostList';

const HomeView = () => {
    return (
        <MainLayout>
            <PostEditor></PostEditor>
            <PostList></PostList>
        </MainLayout>
    )
}

export default HomeView;
