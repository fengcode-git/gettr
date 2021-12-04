import { EditorContext } from '@/components/parts/editor/EditorContext'
import IOpenGraph from '@/libs/common/interfaces/IOpenGraph'
import React from 'react'
import { CircularProgress, Card, CardContent, CardActionArea, CardMedia, Typography } from '@mui/material'
import getOpenGraphInfo from '@/libs/client/api/opengraph'


interface Props {

}

const OpenGraph = (props: Props) => {
    let { links } = React.useContext(EditorContext)
    const [url, setUrl] = React.useState<string>('')
    const [loading, setLoading] = React.useState<boolean>(false)
    const [data, setData] = React.useState<IOpenGraph | null>(null)

    React.useEffect(() => {
        if (links.length === 0) {
            setUrl('')
        } else {
            setUrl(links[0])
        }
    }, [links])

    React.useEffect(() => {
        if (url == '') {
            setData(null)
        } else {
            setLoading(true)
            getOpenGraphInfo(url).then(value => {
                setData(value)
            }).catch(err => {
                setData(null)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [url])


    if (loading) {
        return <CircularProgress />
    } else if (data == null) {
        return null
    } else {
        return (
            <Card elevation={0}>
                <CardActionArea>
                    <CardMedia image={data.image} style={{height:'200px'}}></CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{data.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{data.description}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

export default OpenGraph
