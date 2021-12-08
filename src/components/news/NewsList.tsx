import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system'
import NewsHeader from '@/components/news/NewsHeader'
import { getNews, INewsItem } from '@/libs/client/api/news.api'
import NewsItem from '@/components/news/NewsItem'
import StringHelper from '@/libs/common/utils/StringHelper'
import IOpenGraph from '@/libs/common/interfaces/IOpenGraph'
import useToast from '@/components/toast/useToast'

const StyledWrpper = styled('div')`
    background: #fff;
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 7px 6px;
    border-radius: 10px;
    margin-bottom: 25px;
`
const NewsList = () => {
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState<INewsItem[]>([])
    const { showError } = useToast()
    React.useEffect(() => {
        setLoading(true)
        getNews().then(result => {
            setData(result.content)
        }).catch(err => {
            showError(err.message)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <StyledWrpper>
            <NewsHeader title="新闻"></NewsHeader>
            {loading ? <CircularProgress sx={{ margin: "5px" }} /> : data.map((item, index) => {
                let news = StringHelper.toObject<IOpenGraph>(item.open_graph)
                return <NewsItem data={news!} key={index} />
            })}
        </StyledWrpper>
    )
}

export default NewsList
