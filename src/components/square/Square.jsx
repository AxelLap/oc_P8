import './square.css'

function Square(props) {
    const { picture, type, alt } = props;
    return (
        <div className='squareIconWrapper'>
            <img className={`squareIcon ${type}`} src={picture} alt={alt} />
        </div>
    )

}

export default Square;