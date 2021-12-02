import { DecorationSet, Decoration, EditorView } from 'prosemirror-view'
import { EditorState, Plugin, TextSelection, Transaction } from 'prosemirror-state'
import { Fragment, Node, ResolvedPos, Slice } from 'prosemirror-model'
import EditorHelper from '@/components/parts/editor/EditorHelper'

const REG = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9:%._\+~=]{1,256}\.[a-z]{1,6}\b([-a-zA-Z0-9:%_\+.~?&//=]*)/ig


const doLink = ()=>{
    
}

const handleLink = (view: EditorView<any>, node: Node, tr: Transaction<any>, $p: ResolvedPos<any>, setLinks: React.Dispatch<React.SetStateAction<Array<string>>>) => {
    let state = view.state
    let markType = state.schema.marks.link
    let nodeText = node.textContent
    if (nodeText) {
        let $nodeStart = $p.start()
        let $nodeEnd = $p.end()
        let match = null
        tr = tr.removeMark($nodeStart, $nodeEnd, markType)
        while (match = REG.exec(nodeText)) {
            let url = match[0]
            let eUrl = encodeURI(url)
            let index = match.index
            let $begin = $nodeStart + index
            let $end = $begin + url.length
            const link = markType.create({ href: eUrl });
            tr = tr.addMark($begin, $end, link)
        }
    }
    return tr
}

const autoLinkPlugin = (setLinks: React.Dispatch<React.SetStateAction<Array<string>>>) => {
    return new Plugin({
        props: {
            handleDOMEvents: {
                keyup: (view: EditorView<any>, event: KeyboardEvent) => {
                    let state = view.state
                    let select = view.state.selection
                    if (select instanceof TextSelection && select.$cursor) {
                        let rangs = select.ranges
                        let tr = state.tr
                        for (let index = 0; index < rangs.length; index++) {
                            const rang = rangs[index]
                            tr = handleLink(view, rang.$from.parent, tr, rang.$from, setLinks)
                            tr = handleLink(view, rang.$to.parent, tr, rang.$to, setLinks)
                        }
                        view.dispatch(tr)
                    }
                    return false
                }
            },
            handlePaste: (view: EditorView<any>, event: ClipboardEvent, slice: Slice<any>) => {
                let content = slice.content
                let state = view.state
                let schema = state.schema
                let text = slice.content.textBetween(0, content.size)
                let tr = state.tr
                if (REG.test(text)) {
                    let urlNode = schema.text(text, [schema.marks.link.create({ href: text })])
                    let frag = Fragment.from(urlNode)
                    let newSlice = new Slice(frag, 0, 0)
                    if (state.selection instanceof TextSelection) {
                        tr = tr.insert(state.selection.$anchor.pos, frag)
                    } else {
                        tr = tr.replaceSelection(newSlice)
                    }
                } else {
                    let textNode = view.state.schema.text(text)
                    let frag = Fragment.from(textNode)
                    let newSlice = new Slice(frag, 0, 0)
                    if (state.selection instanceof TextSelection) {
                        tr = tr.insert(state.selection.$anchor.pos, frag)
                    } else {
                        tr = tr.replaceSelection(newSlice)
                    }
                }

                view.dispatch(tr)
                return true
            }
        }
    })
}
export default autoLinkPlugin