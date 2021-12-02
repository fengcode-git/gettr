import { EditorContext } from '@/components/parts/editor/EditorContext'
import React, { useContext } from 'react'
import { Box, styled } from '@mui/system'
import { IconButton } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

interface Props {

}

const ImageList = (props: Props) => {
    const { images, setImages } = useContext(EditorContext)
    const StyledFile = styled('div')`
        padding: "6px";
        position: relative;
        width: ${images.length <= 1 ? "100%" : "50%"};
        overflow: hidden;
    `
    const handleClick = (image: string) => {
        let newArray = images.filter(item => {
            return item !== image
        })
        setImages(newArray)
    }
    return (
        <Box margin="10px -6px" display="flex" flexWrap="wrap">
            {images.map(item => {
                return (
                    <StyledFile key={item}>
                        <div style={{ maxHeight: '500px', height: `${images.length > 1 ? "290px" : 'auto'}`, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden",borderRadius:'10px',padding:'6px' }}>
                            <img src={item} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            <IconButton sx={{ position: 'absolute', top: '5px', right: '5px' }} onClick={() => { handleClick(item) }}>
                                <HighlightOffIcon></HighlightOffIcon>
                            </IconButton>
                        </div>
                    </StyledFile>
                )
            })}
        </Box>
    )
}

export default ImageList
