
import Noimage from '../assets/no-image.png'
function Card({ News }) {
    const { url, title, body,image } = News
    return (

        <div className="card m-2" >
            <img src={image!==null ? image:Noimage}
                className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>


    )
}

export default Card