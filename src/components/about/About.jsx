import './about.css'

import AboutSlider from '../aboutSlider/AboutSlider'
import ScrollBtn from '../scrollbutton/ScrollBtn'

function About() {
    return (
        <section className='aboutSection' >
            <div className="anchor3" id='compétences'></div>
            <aside className='aboutContent'>
                <div className='sideText'>
                    <h1 >Axel Laplace Développeur Web </h1>
                    <AboutSlider />
                </div>
            </aside>
            <ScrollBtn
                scrollValue={((window.innerHeight) * 0.9)}
                type={'dropDownBtn'}
            />
            <div className='anchor' id='projets'></div>
        </section>
    )
}

export default About