import DocSchema from "@/components/parts/editor/DocSchema";
import { InputRule } from "prosemirror-inputrules";

export default function linkRule(schema: DocSchema) {
    const reg = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i
    return new InputRule(reg, (state, match, start, end) => {
        let $start = state.doc.resolve(start);
        let markType = schema.marks.link
        if (!$start.parent.type.allowsMarkType(markType)) {
            return null
        }
        const oLinkString = match[0].substring(0, match[0].length - 1);
        const oLink = markType.create({ href: oLinkString });
        const oPos = { from: start, to: end };
        const tr = state.tr
            .removeMark(oPos.from, oPos.to, markType)
            .addMark(oPos.from, oPos.to, oLink)
            .insertText(match[5], oPos.to);
        return tr;
    })
}