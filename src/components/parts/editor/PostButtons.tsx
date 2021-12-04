import React, { useContext } from 'react'
import { Box, Button, Grid, IconButton, Input, Popover } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import { styled } from '@mui/system'
import 'emoji-mart/css/emoji-mart.css'
import { BaseEmoji, EmojiData, Picker } from 'emoji-mart'
import { EditorContext } from '@/components/parts/editor/EditorContext'
import updateFile from '@/libs/client/api/file.api'
import useToast from '@/components/toast/useToast'

const StyledPublicButton = styled(Button)`
    background-color: #232255;
    color: white !important;
    border-radius: 100px;
    font-size: 16px;
    margin-left: auto;
    &::hover{
        background-color: #3d3c7c;
        color: white;
    }
    &::disabled{
        background-color: #bdbdcc;
        color: white;
    }
`

const PostButtons = () => {
    const [emojiBtnRef, setEmojiBtnRef] = React.useState<any>(null);
    const [disable,setDisable] = React.useState(false)
    const context = useContext(EditorContext)
    const { showError } = useToast()
    const addEmoji = (emoji: BaseEmoji) => {
        if (emoji.native) {
            context.setEmoji(emoji.native)
        }
    }
    const open = Boolean(emojiBtnRef)
    const handleClose = () => {
        setEmojiBtnRef(null)
    }
    const chandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setEmojiBtnRef(event.currentTarget)
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event
        if (target.files && target.files.length > 0) {
            let file = target.files[0]
            updateFile(file).then(result => {
                let imgs = context.images.slice()
                imgs.push(result)
                context.setImages(imgs)
            }).catch(err => {
                showError(err.message)
            })
        }
    }
    React.useEffect(()=>{
        if(context.images.length>=4){
            setDisable(true)
        }else{
            setDisable(false)
        }
    },[context.images])
    return (
        <Box marginTop={2} display="flex" alignItems="center">
            <label htmlFor="icon-button-file">
                <input style={{ display: 'none' }} accept="image/*,video/*" id="icon-button-file" type="file" disabled={disable} onChange={handleChange} />
                <Button component="span" startIcon={<InsertPhotoIcon />} sx={{ color: 'black' }} disabled={disable}>媒体</Button>
            </label>
            <Button sx={{ color: 'black' }} startIcon={<EmojiEmotionsIcon />} ref={emojiBtnRef} onClick={chandleClick}>表情</Button>
            <Popover open={open} anchorEl={emojiBtnRef} onClose={handleClose}>
                <Picker onSelect={addEmoji} />
            </Popover>
            <StyledPublicButton variant="contained" disableElevation={true} disabled>发帖子</StyledPublicButton>
        </Box>
    )
}

export default PostButtons
