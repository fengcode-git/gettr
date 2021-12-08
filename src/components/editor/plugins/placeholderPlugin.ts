import { DecorationSet, Decoration } from 'prosemirror-view'
import { EditorState, Plugin } from 'prosemirror-state'

const placeholderPlugin = (text: string) => {
    return new Plugin({
        props: {
            decorations: (state: EditorState) => {
                const doc = state.doc
                if (doc.childCount > 1 || !doc.firstChild?.isTextblock || doc.firstChild.content.size > 0) {
                    return null
                } else {
                    const place = document.createElement('div')
                    place.classList.add('placeholder')
                    place.textContent = text
                    return DecorationSet.create(doc, [Decoration.widget(1, place)])
                }
            }
        }
    })
}
export default placeholderPlugin