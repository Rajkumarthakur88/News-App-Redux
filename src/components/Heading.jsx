import { useSelector } from 'react-redux/es/exports'

function Heading() {
    const Topic = useSelector(state => state.Topic)
    const topics = Topic.Topic
    return (
        <div className='container my-3 text-center'>
            <h1>Top News of {topics}</h1>
        </div>
    )
}

export default Heading