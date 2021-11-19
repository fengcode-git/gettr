import { MessageContext } from '@/components/toast/ToastProvider'
import { AlertColor } from '@mui/material/Alert'
import React from 'react'


const useToast = () => {
    const context = React.useContext(MessageContext)
    const show = (msg: string, color: AlertColor) => {
        context.setMessage?.(msg)
        context.setColor?.(color)
        context.setOpen?.(true)
    }
    const showError = (msg: string) => { show(msg, 'error') }
    const showInfo = (msg: string) => { show(msg, 'info') }
    const showSuccess = (msg: string) => { show(msg, 'success') }
    const showWarning = (msg: string) => { show(msg, 'warning') }
    return { showError, showInfo, showSuccess, showWarning }
}
export default useToast