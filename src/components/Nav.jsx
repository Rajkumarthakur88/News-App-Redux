import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchNews } from '../store/NewsSlice'
import { addSearchtext } from '../store/TopicSlice'
import Logo from '../assets/nav-log.png'

function Nav() {

    const [search, setSearch] = useState()
    const Topic = useSelector(state => state.Topic)
    const dispatch = useDispatch()
    const topic = Topic.Topic
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addSearchtext(search))
        setSearch("")
    }
    useEffect(() => {
        dispatch(fetchNews(topic))
    }, [search])

    return (

        <nav className="navbar bg-primary d-flex justify-content-between">
            <img className='p-1 ms-4' style={{ width: "45px", backgroundColor: "white", borderRadius: "50%" }} src={Logo} alt="logo" />
            <form className="d-flex me-3" role="search" onSubmit={(e)=>handleSubmit(e)}>
                <input className=" form-control me-2" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit" >Search</button>

            </form>
        </nav>
    )
}

export default Nav