import React from 'react'
import { createContext, useState } from 'react'
import ExtMessage from '@/controls/ExtMessage'
import { AlertColor } from '@mui/material/Alert'

interface Props {
    children: React.ReactNode
}

export interface IMessageContext {
    message: string,
    setMessage?: React.Dispatch<React.SetStateAction<string>>,
    color?: AlertColor,
    setColor?: React.Dispatch<React.SetStateAction<AlertColor>>,
    open?: boolean,
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}


export const MessageContext = createContext<IMessageContext>({
    message: '',
    color: 'error',
    open: false,
})

const ToastProvider = (props: Props) => {
    const [message, setMessage] = useState('')
    const [color, setColor] = useState<AlertColor>('error')
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div>
            <MessageContext.Provider value={{ message, setMessage, color, setColor, open, setOpen }}>
                <ExtMessage message={message} color={color} open={open} setOpen={setOpen}></ExtMessage>
                {props.children}
            </MessageContext.Provider>
        </div>
    )
}

export default ToastProvider
