import React, { useContext } from 'react'
import { Handle, ProseMirror } from 'use-prosemirror'
import { EditorContext } from '@/components/parts/editor/EditorContext'
import { EditorState } from 'prosemirror-state'
import { styled } from '@mui/system'
import { getAllPerson } from '@/libs/client/api/person.api'

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
    const ref = React.useRef<Handle>(null)
    const handleChange = (state: EditorState<any>) => {
        context.setValue(state)
    }

    React.useEffect(() => {
        if (context.isWorking) {
            getAllPerson().then(result => {
                console.log(result)
            })
        }
    }, [context.isWorking])

    React.useEffect(() => {
        let tr = context.value.tr.insertText(context.emoji)
        ref.current?.view?.dispatch(tr)
    }, [context.emoji])

    return (
        <React.Fragment>
            <StyledProseMirror ref={ref} state={context.value} onChange={handleChange} attributes={{ spellcheck: 'false' }}></StyledProseMirror>
        </React.Fragment>
    )
}

export default TextEditor
