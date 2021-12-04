import DocSchema, { docSchema } from "@/components/parts/editor/DocSchema";
import { EditorContext } from "@/components/parts/editor/EditorContext";
import linkPlugin, { getLinksFromState } from "@/components/parts/editor/plugins/linkPlugin";
import mentionPlugin from "@/components/parts/editor/plugins/mentionPlugin";
import placeholderPlugin from "@/components/parts/editor/plugins/placeholderPlugin";
import { baseKeymap } from "prosemirror-commands";
import { keymap } from "prosemirror-keymap";
import { Plugin } from "prosemirror-state";
import React, { useState } from "react"
import { useProseMirror } from "use-prosemirror"

interface Props {
    children: React.ReactNode
}

const EditorProvider = (props: Props) => {
    const [isWorking, setWorking] = useState(false)
    const [text, setText] = useState('')
    const [emoji, setEmoji] = useState('')
    const [images, setImages] = useState<Array<string>>([])
    const [links, setLinks] = useState<Array<string>>([])

    let plugins: Plugin[] = [
        linkPlugin(),
        keymap(baseKeymap),
        mentionPlugin(setWorking),
        placeholderPlugin('有什么新鲜事吗？'),
    ]
    const [value, setValue] = useProseMirror({ schema: docSchema, plugins })

    React.useEffect(() => {
        let links = getLinksFromState(value)
        setLinks(links)
    }, [value])

    return (
        <EditorContext.Provider value={{ value, setValue, isWorking, setWorking, text, setText, emoji, setEmoji, images, setImages, links, setLinks }}>
            {props.children}
        </EditorContext.Provider>
    )
}
export default EditorProvider