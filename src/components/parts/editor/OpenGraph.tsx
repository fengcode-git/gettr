import { EditorContext } from '@/components/parts/editor/EditorContext'
import React from 'react'
import { CircularProgress, Card, CardContent, CardActionArea, CardMedia, Typography } from '@mui/material'
import getOpenGraphInfo from '@/libs/client/api/opengraph'


interface Props {

}

const OpenGraph = (props: Props) => {
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
            <Card elevation={0}>
                <CardActionArea>
                    <CardMedia image={openGraph.image} style={{ height: '200px' }}></CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{openGraph.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{openGraph.description}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

export default OpenGraph
