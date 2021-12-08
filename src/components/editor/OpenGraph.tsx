import { EditorContext } from '@/components/editor/EditorContext'
import React from 'react'
import { CircularProgress } from '@mui/material'
import getOpenGraphInfo from '@/libs/client/api/opengraph'
import OpenGraphBox from '@/components/common/OpenGraphBox'

const OpenGraph = () => {
    let { links, openGraph, setOpenGraph } = React.useContext(EditorContext)
    const [url, setUrl] = React.useState<string>('')
    const [loading, setLoading] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (links.length === 0) {
            setUrl('')
        } else {
            setUrl(links[0])
        }
    }, [links])

    React.useEffect(() => {
        if (url == '') {
            setOpenGraph(null)
        } else {
            setLoading(true)
            getOpenGraphInfo(url).then(value => {
                setOpenGraph(value)
            }).catch(err => {
                console.error(err)
                setOpenGraph(null)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [url])


    if (loading) {
        return <CircularProgress />
    } else if (openGraph == null) {
        return null
    } else {
        return (
            <OpenGraphBox data={openGraph}></OpenGraphBox>
        )
    }
}

export default OpenGraph