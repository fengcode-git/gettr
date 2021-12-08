import IOpenGraph from '@/libs/common/interfaces/IOpenGraph'
import React from 'react'
import { styled } from '@mui/system'

interface Props {
    data: IOpenGraph | null | undefined
}

const StyledWrapper = styled('div')`
    border: 1px solid #e8e9ef;
    overflow: hidden;
    border-radius: 10px;
    width: 100%;
`
const StyledImageBox = styled('div')`
    width: 100%;
    height: 100%;
    overflow: hidden;
    min-height: 200px;
    max-height: 800px;
    border-radius: 10px 10px 0px 0px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
`

const StyledTextBox = styled('div')`
    padding: 8px 15px;
    overflow: hidden;
    font-size: 16px;
    letter-spacing: 0.01em;
`
const StyledTitle = styled('p')`
    overflow: hidden;
    font-size: 15px !important;
    text-align: left;
    line-height: 20px !important;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const StyledDescribe = styled('p')`
    color: #5c7192;
    display: -webkit-box;
    overflow: hidden;
    font-size: 15px !important;
    word-wrap: break-word;
    margin-top: 4px;
    text-align: left;
    font-weight: 400;
    line-height: 20px !important;
    white-space: normal !important;
    text-overflow: ellipsis;
`
const OpenGraphBox = (props: Props) => {
    const { data } = props
    if (!data) {
        return null
    }
    const handleClick = () => {
        window.open(data.url)
    }
    if (!data.image) {
        return null
    } else {
        return (
            <StyledWrapper>
                <StyledImageBox>
                    <img src={data.image} alt="image" style={{ width: "100%" }} onClick={handleClick}></img>
                    <StyledTextBox>
                        <StyledTitle>{data.title}</StyledTitle>
                        <StyledDescribe>{data.description}</StyledDescribe>
                    </StyledTextBox>
                </StyledImageBox>
            </StyledWrapper>

        )
    }
}

export default OpenGraphBox
