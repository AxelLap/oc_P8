import './header.css'

function Header() {
    return (
        <header>

            <nav>
                <ul>
                    <li><a className='navItem' href='#'>Mes travaux</a></li>
                    <li><a className='navItem' href='#'>Compétences</a></li>
                    <li><a className='navItem' href='#'>Contacts</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header