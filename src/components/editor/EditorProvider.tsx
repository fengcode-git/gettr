import DocSchema, { docSchema } from "@/components/editor/DocSchema";
import { EditorContext } from "@/components/editor/EditorContext";
import linkPlugin, { getLinksFromState } from "@/components/editor/plugins/linkPlugin";
import mentionPlugin from "@/components/editor/plugins/mentionPlugin";
import placeholderPlugin from "@/components/editor/plugins/placeholderPlugin";
import IOpenGraph from "@/libs/common/interfaces/IOpenGraph";
import { baseKeymap } from "prosemirror-commands";
import { keymap } from "prosemirror-keymap";
import { EditorState, Plugin } from "prosemirror-state";
import React, { useState } from "react"
import { useProseMirror } from "use-prosemirror"
import { history, redo, undo } from "prosemirror-history"

interface Props {
    children: React.ReactNode
}

const EditorProvider = (props: Props) => {
    const [isWorking, setWorking] = useState(false)
    const [text, setText] = useState('')
    const [emoji, setEmoji] = useState('')
    const [images, setImages] = useState<Array<string>>([])
    const [links, setLinks] = useState<Array<string>>([])
    const [openGraph, setOpenGraph] = React.useState<IOpenGraph | null>(null)

    let plugins: Plugin[] = [
        history(),
        linkPlugin(),
        keymap({ "Mod-z": undo, "Mod-y": redo }),
        keymap(baseKeymap),
        mentionPlugin(setWorking),
        placeholderPlugin('有什么新鲜事吗？'),
    ]
    const [value, setValue] = useProseMirror({ schema: docSchema, plugins })

    const reset = () => {
        let newState = EditorState.create({ schema: docSchema, plugins })
        setValue(newState)
        setLinks([])
        setImages([])
        setOpenGraph(null)
    }

    React.useEffect(() => {
        let links = getLinksFromState(value)
        setLinks(links)
    }, [value])

    return (
        <EditorContext.Provider value={{ value, setValue, isWorking, setWorking, text, setText, emoji, setEmoji, images, setImages, links, setLinks, openGraph, setOpenGraph, reset }}>
            {props.children}
        </EditorContext.Provider>
    )
}
export default EditorProvider