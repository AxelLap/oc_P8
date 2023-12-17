import './header.css'
import git from '../../assets/git.png'
import NavBtn from '../navbtn/NavBtn'

function Header() {
    return (
        <header>

            <nav>
                <ul>
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