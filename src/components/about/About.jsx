import './about.css'
import profilePic from '../../assets/black.jpg'
import AboutSlider from '../aboutSlider/AboutSlider'

function About() {
    return (
        <section className='aboutSection'>
            <aside className='aboutContent'>

                <img src={profilePic} className='profile' />

                <div className='sideText'>
                    <h1>Axel Laplace Développeur Web </h1>
                    <AboutSlider />
                </div>
            </aside>
            <button className='dropDownBtn'><a className='dropDownLink'><i className="fa-solid fa-chevron-down" aria-hidden="true"></i></a></button>
        </section>
    )
}

export default About