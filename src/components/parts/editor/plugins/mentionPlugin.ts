import { DecorationSet, Decoration, EditorView } from 'prosemirror-view'
import { EditorState, Plugin, TextSelection, Transaction } from 'prosemirror-state'
import { Node, ResolvedPos, Slice } from 'prosemirror-model'

const mentionPlugin = (setWorking: React.Dispatch<React.SetStateAction<boolean>>)=>{
    return new Plugin({
        props: {
            handleKeyPress: (view: EditorView<any>, event: KeyboardEvent) => {                
                setWorking(true)
                return false
            }
        }
    })
}
export default mentionPlugin