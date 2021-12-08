import React from 'react'
import IOpenGraph from '@/libs/common/interfaces/IOpenGraph'
import { styled } from '@mui/system'

interface Props {
    data: IOpenGraph
}

const StyledBox = styled('a')`
    display: flex;
    padding: 12px 18px;
    align-items: flex-start;
    border-bottom: 1px solid #e8e9ef;
    text-decoration: none;
`

const StyledImage = styled('img')`
    width: 52px;
    height: 52px;
    object-fit: cover;
    margin-right: 14px;
    border-radius: 4px;
`

const StyledContainer = styled('div')`
    width: calc(100% - 62px);
    font-size: 15px;
    font-weight: 700;
    line-height: 19.5px;
`

const StyledTitle = styled('div')`
    overflow: hidden;
    font-size: 14px;
    font-weight: 700;
    line-height: 133%;
    text-overflow: ellipsis;
`

const StyledText = styled('div')`
    color: #6e7187;
    font-weight: 400;
    overflow: hidden;
    font-size: 15px;
    word-break: break-word;
    line-height: 130%;
`

const NewsItem = (props: Props) => {
    return (
        <StyledBox href={props.data.url} target="_blank">
            <StyledImage src={props.data.image} alt="image"></StyledImage>
            <StyledContainer>
                <StyledTitle>{props.data.title}</StyledTitle>
                <StyledText>{props.data.description}</StyledText>
            </StyledContainer>
        </StyledBox>
    )
}

export default NewsItem
