import DocSchema from "@/components/parts/editor/DocSchema";
import { EditorContext } from "@/components/parts/editor/EditorContext";
import linkRule from "@/components/parts/editor/plugins/linkRule";
import placeholderPlugin from "@/components/parts/editor/plugins/placeholderPlugin";
import { baseKeymap } from "prosemirror-commands";
import { inputRules } from "prosemirror-inputrules";
import { keymap } from "prosemirror-keymap";
import { EditorState, Plugin } from "prosemirror-state";
import React, { useState } from "react"
import { useProseMirror } from "use-prosemirror"

interface Props {
    children: React.ReactNode
}

const EditorProvider = (props: Props) => {
    let schema = new DocSchema()
    let plugins: Plugin[] = [
        inputRules({rules: [linkRule(schema)]}),
        keymap(baseKeymap),
        placeholderPlugin('有什么新鲜事吗？'),
    ]
    const [value, setValue] = useProseMirror({ schema, plugins })
    const [isWorking, setWorking] = useState(false)
    return (
        <EditorContext.Provider value={{ value, setValue, isWorking, setWorking }}>
            {props.children}
        </EditorContext.Provider>
    )
}
export default EditorProvider