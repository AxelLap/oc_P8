import './bubble.css'

function Bubble(props) {
    const { picture, type, alt } = props
    return (
        <div className={`roundIconWrapper ${type}`}>
            <img className='roundIcon' src={picture} alt={alt} />
        </div>
    )
}

export default Bubble