import DocSchema from "@/components/parts/editor/DocSchema";
import { EditorState } from "prosemirror-state";
import React, { useReducer, createContext } from "react"
import { useProseMirror } from "use-prosemirror";

export interface IEditorContext{
    value: EditorState<DocSchema>,
    setValue: React.Dispatch<React.SetStateAction<EditorState<DocSchema>>>,
    isWorking: boolean,
    setWorking: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditorContext = React.createContext<IEditorContext>({} as IEditorContext)