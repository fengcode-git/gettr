import useOnScreen from '@/components/hooks/useOnScreen'
import React from 'react'
import { CircularProgress } from "@mui/material"

interface Props {
    loadData: () => void
    stopLoad: boolean
}

const ScrollLoad = (props: Props) => {
    const domRef = React.useRef<HTMLDivElement>(null)
    let div = (
        <div ref={domRef}>
            <CircularProgress></CircularProgress>
        </div>
    )
    const show = useOnScreen(domRef)
    React.useEffect(() => {
        if (!props.stopLoad && show) {
            props.loadData()
        }
    }, [show])
    return props.stopLoad ? null : div
}

export default ScrollLoad
