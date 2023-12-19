import './header.css'
import git from '../../assets/git.png'
import NavBtn from '../navbtn/NavBtn'

import { useState } from 'react'

function Header() {

    const [burgerOpened, setBurgerOpened] = useState(false)

    const handleOpenBurger = () => {
        setBurgerOpened(!burgerOpened)
    }

    console.log(burgerOpened);

    return (
        <header >

            <nav>
                <ul className='navList'>
                    <NavBtn
                        goTo={'Mes compétences'}
                        scrollValue={0}
                    />

                    <NavBtn
                        goTo={'Mes projets'}
                        scrollValue={(window.innerHeight) * 0.9}
                    />
                    <NavBtn
                        goTo={'À Propos'}
                        scrollValue={((window.innerHeight) * 0.9) * 2}
                    />
                </ul>
                <button onClick={handleOpenBurger} className="navBurger">
                    <div className="burgerLine"></div>
                </button>
                <ul className={`${burgerOpened ? "responsiveNav" : "hiddenNav"}`} >
                    <i onClick={handleOpenBurger} className="fa-solid fa-xmark"></i>
                    <li><a onClick={handleOpenBurger} className='burgerLink' href='#compétences'>Mes compétences</a></li>
                    <li><a onClick={handleOpenBurger} className='burgerLink' href='#projets'>Mes projets</a></li>
                    <li><a onClick={handleOpenBurger} className='burgerLink' href="#àpropos">À Propos</a></li>
                    <li><a onClick={handleOpenBurger} className='burgerLink' href="#contacts">Contacts</a></li>

                </ul>
                <a href='https://github.com/AxelLap' target='_blank' rel="noreferrer">
                    <img src={git} alt="Logo git-hub" className="gitLogo" />
                </a>
                <a href='mailto:axellaplace.dev@gmail.com' className='mailLogo'>
                    <i class="fa-regular fa-envelope"></i>
                </a>
            </nav>
        </header>
    )
}

export default Header