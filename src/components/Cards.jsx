import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchNews } from '../store/NewsSlice'
import Card from './Card'

function Cards() {

    const { News, isLoading, isError } = useSelector(state => state.News)
    const Topic = useSelector(state => state.Topic)
    const dispatch = useDispatch()

    const topic = Topic.Topic

    useEffect(() => {
        dispatch(fetchNews(topic))
    }, [])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="container d-flex flex-wrap justify-content-center">
            {
                News.map((item, index) => <Card key={index} News={item} />)
            }
        </div>

    )
}

export default Cards