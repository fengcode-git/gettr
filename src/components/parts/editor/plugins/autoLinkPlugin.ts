import { DecorationSet, Decoration } from 'prosemirror-view'
import { EditorState, Plugin } from 'prosemirror-state'

const REG = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i
const autoLinkPlugin = ()=>{
    return new Plugin({
        props: {
            
        }
    })
}