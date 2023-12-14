import './navBtn.css'

import { useState } from 'react'

function NavBtn(props) {
    const { scrollValue, goTo } = props;
    const [heightSection, setHeightSection] = useState(scrollValue)

    const handleScroll = () => {
        window.scroll({
            top: heightSection,
            behavior: 'smooth'
        })
    }
    return (
        <li>
            <button onClick={handleScroll} className='navItem' >{goTo}</button>
            <div className="line"></div>
        </li>
    )
}

export default NavBtn
