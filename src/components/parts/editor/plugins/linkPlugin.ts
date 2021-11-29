import EditorHelper from "@/components/parts/editor/EditorHelper"
import { Plugin, TextSelection } from "prosemirror-state"
import { EditorView } from "prosemirror-view"

const REG = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

const linkPlugin = () => {
    return new Plugin({
        props: {
            handleDOMEvents: {
                keyup: (view: EditorView<any>, event: KeyboardEvent) => {
                    let state = view.state
                    console.log(state)
                    let selection = state.selection
                    if (selection instanceof TextSelection) {
                        let $cursor = selection.$cursor
                        if ($cursor) {
                            let tr = view.state.tr
                            let cursorNode = EditorHelper.getCursorNode(state)
                            let beforeNodeInfo = EditorHelper.getBeforeSiblingNode($cursor)
                            if (cursorNode) {
                                let cursorLinkInfo = EditorHelper.getLinkInfo(cursorNode)
                                let beforeLinkInfo = EditorHelper.getLinkInfo(beforeNodeInfo ? beforeNodeInfo.node : null)
                                let start = 0
                                
                                
                                if (!cursorLinkInfo.isLink) {
                                    let text = cursorLinkInfo.text
                                    let match = REG.exec(text)
                                    if (match) {
                                        let url = match[0]
                                        let index = match.index!
                                        let start = $cursor.start() + index
                                        let end = start + url.length
                                        let markType = state.schema.marks.link
                                        const link = markType.create({ href: url })
                                        let tr = state.tr.addMark(start, end, link)
                                        view.dispatch(tr)
                                    }
                                }
                            }
                        }
                    }
                    return false
                }
            }
        }
    })
}
export default linkPlugin