import React, { useContext } from 'react'
import { Backdrop, Box, Button, CircularProgress, Popover } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import { styled } from '@mui/system'
import 'emoji-mart/css/emoji-mart.css'
import { BaseEmoji, Picker } from 'emoji-mart'
import { EditorContext } from '@/components/editor/EditorContext'
import updateFile from '@/libs/client/api/file.api'
import useToast from '@/components/toast/useToast'
import EditorHelper from '@/components/editor/EditorHelper'
import IPostInfo from '@/libs/common/interfaces/IPostInfo'
import PostType from '@/libs/common/enums/PostType'
import { insertPost } from '@/libs/client/api/post.api'

const StyledPublicButton = styled(Button)`
    background-color: #232255;
    color: white !important;
    border-radius: 100px;
    font-size: 16px;
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
    const [disable, setDisable] = React.useState(false)
    const context = useContext(EditorContext)
    const [textLength, setTextLength] = React.useState(0)
    const { showError, showSuccess } = useToast()
    const [working, setWorking] = React.useState(false)
    const maxLength = 777
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
                context.setImages([...context.images, result])
            }).catch(err => {
                showError(err.message)
            })
        }
    }
    React.useEffect(() => {
        if (context.images.length >= 4) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }, [context.images])

    React.useEffect(() => {
        let doc = context.value.doc
        let text = doc.textBetween(0, doc.nodeSize - 2, '\n')
        let length = text.length
        setTextLength(length)
    }, [context.value])

    const handlePublic = () => {
        let html = EditorHelper.toHtml(context.value)
        let images = JSON.stringify(context.images)
        let open_graph = context.openGraph ? JSON.stringify(context.openGraph) : ''
        let post: IPostInfo = {
            content: html,
            images: images,
            open_graph: open_graph,
            video: '',
            ref_id: '',
            type: PostType.post
        }
        setWorking(true)
        insertPost(post).then(result => {
            if (result.success) {
                context.reset()
                showSuccess('发布成功')
            } else {
                showError(result.message)
            }
        }).catch(err => {
            showError(err.message)
        }).finally(() => {
            setWorking(false)
        })
    }

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
            <div style={{ marginLeft: 'auto', marginRight: '10px' }}>{textLength} / {maxLength} </div>
            <StyledPublicButton variant="contained" disableElevation={true} disabled={textLength >= maxLength || textLength === 0} onClick={handlePublic}>发帖子</StyledPublicButton>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={working}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    )
}

export default PostButtons
