import { EditorView } from 'prosemirror-view'
import { EditorState, NodeSelection, Plugin, TextSelection, Transaction } from 'prosemirror-state'
import { Fragment, Slice } from 'prosemirror-model'
import { docSchema } from '@/components/parts/editor/DocSchema'

const REG = /((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)$/i
const ExactReg = /^((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)$/i


const createLinkNode = (url: string) => {
    let content = docSchema.text(url)
    let linkNode = docSchema.node('link', { href: url }, content)
    return linkNode
}
/** 遍历文档获取链接 */
export const getLinksFromState = (state: EditorState): string[] => {
    let links: Array<string> = []
    state.doc.descendants(node => {
        if (node.type.name === "link") {
            let url = node.attrs.href
            links.push(url)
        }
    })
    return links
}

const linkPlugin = () => {
    return new Plugin({
        props: {
            handleKeyDown: (view: EditorView<any>, event: KeyboardEvent) => {
                let state = view.state
                let selection = view.state.selection
                if (selection instanceof TextSelection && selection.$cursor) {
                    // 如果用户输入空格或回车
                    if (event.key === ' ' || event.key === 'Enter') {
                        let node = selection.$cursor.nodeBefore
                        if (node) {
                            // 检查上一个节点是否是一个链接，如果是，则不处理
                            let isLink = node.type.name === 'link'
                            if (isLink) {
                                return false
                            }
                            let text = node.text
                            let match = text?.match(REG)
                            if (match) {
                                let url = match[0]
                                // 获取link放置的位置
                                let end = selection.$cursor.pos
                                let start = end - url.length
                                // 创建节点
                                let linkNode = createLinkNode(url)
                                let tr = state.tr.replaceRangeWith(start, end, linkNode)
                                view.dispatch(tr)
                                return false
                            }
                        }
                    }
                }
                return false
            },
            transformPastedHTML: (html: string) => {
                var temp = document.createElement('div');
                temp.innerHTML = html;
                return temp.textContent ? temp.textContent : ''
            },
            transformPasted: (slice: Slice<any>) => {
                let context = slice.content
                let url = context.textBetween(0, context.size)
                if (ExactReg.test(url)) {
                    let linkNode = createLinkNode(url)
                    let fragment = Fragment.from(linkNode)
                    // openStart,openEnd为1时插入link失败，只能是0
                    let newSlice = new Slice(fragment, 0, 0)
                    return newSlice
                } else {
                    return slice
                }
            }
        },
        view: () => ({
            update: (view: EditorView<any>, prevState: EditorState<any>) => {
                // 设置link的块选区，防止link被修改
                if (prevState.selection instanceof TextSelection && prevState.selection.$cursor) {
                    let $cursor = prevState.selection.$cursor
                    if ($cursor.parent.type.name === 'link') {
                        let selection = NodeSelection.create(view.state.doc, $cursor.before())
                        let tr = view.state.tr.setSelection(selection)
                        Promise.resolve().then(() => {
                            view.dispatch(tr)
                        })
                    }
                }
            }
        })
    })
}
export default linkPlugin