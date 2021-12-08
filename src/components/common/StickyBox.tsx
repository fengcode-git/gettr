import React, { CSSProperties } from 'react'

interface Props {
    children: React.ReactNode,
    style: CSSProperties;
}

const StickyBox = (props: Props) => {
    let newStyle = { ...props.style }
    newStyle.position = "sticky"
    newStyle.zIndex = 10
    return (
        <div style={newStyle}>
            {props.children}
        </div>
    )
}

export default StickyBox
