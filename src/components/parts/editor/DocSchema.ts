import { Schema } from "prosemirror-model"
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
                            let el = dom as Element
                            return { href: el.getAttribute("href") }
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
export default DocSchema