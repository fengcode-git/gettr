import { Fragment, Schema } from "prosemirror-model"
class DocSchema extends Schema {
    public constructor() {
        super({
            nodes: {
                doc: {
                    content: "block+"
                },
                paragraph: {
                    content: "inline*",
                    group: "block",
                    parseDOM: [{ tag: "p" }],
                    toDOM() { return ["p", 0] }
                },
                mention: {
                    group: "inline",
                    inline: true,
                    atom: true,
                    attrs: {
                        id: { default: '' },
                        name: { default: '' }
                    },
                    selectable: true,
                    draggable: false,
                    toDOM: node => {
                        return [
                            "span",
                            {
                                "data-mention-id": node.attrs.id,
                                "data-mention-name": node.attrs.name,
                                class: "prosemirror-mention-node"
                            },
                            "@" + node.attrs.name
                        ]
                    },
                    parseDOM: [
                        {
                            tag: 'span[data-mention-id][data-mention-name]', getAttrs(dom) {
                                let e = dom as HTMLElement
                                var id = e.getAttribute("data-mention-id")
                                var name = e.getAttribute("data-mention-name")
                                return {
                                    id: id,
                                    name: name
                                }
                            }
                        }
                    ]
                },
                text: {
                    group: "inline"
                }
            },
            marks: {
                link: {
                    attrs: {
                        href: {}
                    },
                    inclusive: false,
                    parseDOM: [{
                        tag: "a[href]", getAttrs(dom) {
                            let e = dom as HTMLElement
                            return { href: e.getAttribute("href") }
                        }
                    }],
                    toDOM(node) {
                        let { href } = node.attrs;
                        return ["a", { href }, 0]
                    }
                }
            }
        })
    }
}
export const docSchema = new DocSchema()
export default DocSchema