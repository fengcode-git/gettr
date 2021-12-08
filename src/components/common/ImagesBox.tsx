import React from 'react'
import { Box, styled } from '@mui/system'
import { IconButton } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

interface Props {
    images: string[]
    setImages?: React.Dispatch<React.SetStateAction<string[]>>
}

const ImageButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <IconButton sx={{ position: 'absolute', top: '5px', right: '5px' }} onClick={() => { onClick() }}>
            <HighlightOffIcon></HighlightOffIcon>
        </IconButton>
    )
}

const ImagesBox = (props: Props) => {
    const { images } = props
    const StyledFile = styled('div')`
        padding: "6px";
        position: relative;
        width: ${images.length <= 1 ? "100%" : "50%"};
        overflow: hidden;
    `
    const handleClick = (image: string) => {
        if (props.setImages) {
            let newArray = props.images.filter(item => {
                return item !== image
            })
            props.setImages(newArray)
        }
    }
    if (images.length === 0) {
        return null
    } else {
        return (
            <Box margin="10px -6px" display="flex" flexWrap="wrap">
                {props.images.map(item => {
                    return (
                        <StyledFile key={item}>
                            <div style={{ maxHeight: '500px', height: `${props.images.length > 1 ? "290px" : 'auto'}`, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", borderRadius: '10px', padding: '6px' }}>
                                <img src={item} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                {props.setImages && <ImageButton onClick={() => { handleClick(item) }}></ImageButton>}
                            </div>
                        </StyledFile>
                    )
                })}
            </Box>
        )
    }
}

export default ImagesBox
