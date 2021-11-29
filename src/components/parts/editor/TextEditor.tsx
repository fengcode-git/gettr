import React, { useContext } from 'react'
import { ProseMirror } from 'use-prosemirror'
import { EditorContext } from '@/components/parts/editor/EditorContext'
import { EditorState } from 'prosemirror-state'
import { styled } from '@mui/system'

const StyledProseMirror = styled(ProseMirror)`
    background-color: #F7F8F9;
    padding: 0 15px;
    overflow-y: auto;
    border-radius: 10px;
    &>.ProseMirror{
        outline: none;
        min-height: 120px;
        max-height: 500px;
        .placeholder{
            color: #6e7187;
            font-size: 20px;  
        }
    }
    &>.ProseMirror-focused{
        .placeholder{
           display: none;
        }
    }
    & .selected{
        background-color: yellow;
    }
`

const TextEditor = () => {
    const context = useContext(EditorContext)
    const handleChange = (state: EditorState<any>) => {
        context.setValue(state)
    }

    React.useEffect(()=>{
        console.log('isWorking:',context.isWorking)
    },[context.isWorking])

    return (
        <StyledProseMirror state={context.value} onChange={handleChange} attributes={{ spellcheck: 'false' }}></StyledProseMirror>
    )
}

export default TextEditor
