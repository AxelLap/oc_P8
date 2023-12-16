import { Link } from 'react-router-dom'

function Work(props) {
    const { id, image, title } = props
    return (
        <Link to={`/work/${id}`} className='work'>
            <img src={`${image}`} alt="site d'architecte" className="workImg" />
            <figcaption>{title}</figcaption>
        </Link>
    )
}

export default Work