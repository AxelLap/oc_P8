import './about.css'

import AboutSlider from '../aboutSlider/AboutSlider'
import ScrollBtn from '../scrollbutton/ScrollBtn'

function About() {
    return (
        <section className='aboutSection'>
            <aside className='aboutContent'>
                <div className='sideText'>
                    <h1>Axel Laplace Développeur Web </h1>
                    <AboutSlider />
                </div>
            </aside>
            <ScrollBtn
                scrollValue={((window.innerHeight) * 0.9)}
                type={'dropDownBtn'}
            />
        </section>
    )
}

export default About