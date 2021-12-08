import React from 'react'
import { styled } from '@mui/system'

interface Props {
    title: string
}

const StyledBox = styled('div')`
    height: 48px;
    display: flex;
    padding: 0 18px;
    font-size: 20px;
    align-items: center;
    font-weight: 800;
    line-height: 24px;
    border-bottom: 1px solid #e8e9ef;
    justify-content: space-between;
`

const NewsHeader = (props: Props) => {
    return (
        <StyledBox>
            {props.title}
        </StyledBox>
    )
}

export default NewsHeader