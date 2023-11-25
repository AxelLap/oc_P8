import './about.css'
import profilePic from '../../assets/black.jpg'

function About() {
    return (
        <section className='aboutSection'>
            <aside className='aboutContent'>
                <img src={profilePic} className='profile' />
                <div className='sideText'>
                    <h1>Axel Laplace Développeur Web </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
                        quos officiis ut quisquam ullam repudiandae unde molestias alias
                        quod esse magni dolorum, libero sequi deserunt aspernatur optio
                        tempora impedit ipsa?</p>
                </div>
            </aside>
            <button className='dropDownBtn'><a><i class="fa-solid fa-chevron-down" aria-hidden="true"></i></a></button>
        </section>
    )
}

export default About