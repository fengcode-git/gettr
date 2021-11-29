import DocSchema, { docSchema } from "@/components/parts/editor/DocSchema";
import { EditorContext } from "@/components/parts/editor/EditorContext";
import autoLinkPlugin from "@/components/parts/editor/plugins/autoLinkPlugin";
import linkPlugin from "@/components/parts/editor/plugins/linkPlugin";
import placeholderPlugin from "@/components/parts/editor/plugins/placeholderPlugin";
import { baseKeymap } from "prosemirror-commands";
import { keymap } from "prosemirror-keymap";
import { EditorState, Plugin } from "prosemirror-state";
import React, { useState } from "react"
import { useProseMirror } from "use-prosemirror"

interface Props {
    children: React.ReactNode
}

const EditorProvider = (props: Props) => {
    const [isWorking, setWorking] = useState(false)
    let plugins: Plugin[] = [
        // autoLinkPlugin(),
        linkPlugin(),
        keymap(baseKeymap),
        placeholderPlugin('有什么新鲜事吗？'),
    ]
    const [value, setValue] = useProseMirror({ schema: docSchema, plugins })
    return (
        <EditorContext.Provider value={{ value, setValue, isWorking, setWorking }}>
            {props.children}
        </EditorContext.Provider>
    )
}
export default EditorProvider