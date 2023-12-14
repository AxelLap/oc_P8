import { useState } from 'react'
import './scrollBtn.css'

function ScrollBtn(props) {
    const { scrollValue, type } = props
    const [heightSection, setHeightSection] = useState(scrollValue)


    const handleScroll = () => {
        window.scroll({
            top: heightSection,
            behavior: 'smooth'
        })
    }

    return (
        <button onClick={handleScroll} className={type} ><div className='dropDownLink'><i className="fa-solid fa-chevron-down" aria-hidden="true"></i></div></button>
    )
}

export default ScrollBtn