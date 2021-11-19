import React from 'react'
import { useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from "react-transition-group";

interface Props {
    timeout?: number,
    children?: any
}

const RouteAnimation = ({ children, timeout = 150 }: Props) => {
    let location = useLocation()
    return (
        <SwitchTransition>
            <CSSTransition key={location.key} classNames="fade" timeout={timeout}>
                {children}
            </CSSTransition>
        </SwitchTransition>
    )
}

export default RouteAnimation