import RouteAnimation from '@/components/common/RouteAnimation';
import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <RouteAnimation>
            <Outlet></Outlet>
        </RouteAnimation>
    )
}
export default DefaultLayout