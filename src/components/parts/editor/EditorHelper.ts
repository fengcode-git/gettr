import DocSchema, { docSchema } from '@/components/parts/editor/DocSchema'
import { ResolvedPos, Node } from 'prosemirror-model'
import { EditorState, NodeSelection, Selection, TextSelection } from 'prosemirror-state'
import { Transform } from 'prosemirror-transform'
import { EditorView } from 'prosemirror-view'
import { DOMSerializer } from 'prosemirror-model'

interface ILinkInfo {
    text: string,
    href: string,
    isCommon: boolean,
    isLink: boolean,
    node: Node | null | undefined
}

interface INodeInfo {
    node: Node,
    $from: ResolvedPos,
    $to: ResolvedPos
}

class EditorHelper {
    static toHtml(state: EditorState) {
        let div = document.createElement('div')
        let serializer = DOMSerializer.fromSchema(state.schema)
        let fragment = serializer.serializeFragment(state.doc.content)
        div.appendChild(fragment)
        return div.innerHTML
    }
    /** 获取上一个兄弟节点，没有则返回null */
    static getBeforeSiblingNode($pos: ResolvedPos): INodeInfo | null {
        // https://discuss.prosemirror.net/t/how-to-get-the-absolute-position-of-a-sibling-node/544
        // https://discuss.prosemirror.net/t/approaches-for-finding-the-position-of-nodes/3333/5
        if ($pos.nodeBefore) {
            let beforeNode = $pos.nodeBefore
            let $from = $pos.doc.resolve($pos.pos - beforeNode.nodeSize)
            return {
                node: beforeNode,
                $from: $from,
                $to: $pos
            }
        } else {
            return null
        }
    }

    static getNodeText(node: Node | null | undefined): string {
        let text = ''
        if (node) {
            if (node.text) {
                text = node.text
            }
        }
        return text
    }
    static getLinkInfo(node: Node | null | undefined) {
        let info: ILinkInfo = { text: '', href: '', isCommon: false, isLink: false, node: node }
        if (node) {
            info.text = this.getNodeText(node)
            let mark = node.marks.find(item => {
                return item.type.name === docSchema.marks.link.name
            })
            if (mark) {
                info.href = mark.attrs.href
                info.isLink = true
            }
            if (info.text === info.href) {
                info.isCommon = true
            }
        }
        return info
    }

    /** 获取光标所在node，在多选则返回null */
    static getCursorNode(state: EditorState): Node | null {
        let select = state.selection
        if (select) {
            if (select instanceof TextSelection) {
                if (select.$cursor && select.$cursor.nodeBefore) {
                    return select.$cursor.nodeBefore
                }
            }
        }
        return null
    }

    static isExistLink(state: EditorState, from: number, to: number) {
        let doc = state.doc
        let isLink = false
        doc.nodesBetween(from, to, (node, pos) => {
            if (!isLink && node.marks && node.marks.length) {
                isLink = node.marks.some(mark => {
                    return mark.type.name === docSchema.marks.link.name
                })
            }
        })
        return false
    }
    static clearLink(tr: Transform, from: number, to: number): Transform {
        let doc = tr.doc
        doc.nodesBetween(from, to, (node, pos) => {
            if (node.marks && node.marks.length) {
                let isLink = node.marks.some(mark => {
                    return mark.type.name === docSchema.marks.link.name
                })
                if (isLink) {
                    tr = tr.removeMark(pos, pos + node.nodeSize, docSchema.marks.link)
                }
            }
        })
        return tr
    }
}
export default EditorHelper