import './home.css'
import Header from '../../components/header/Header'
import About from '../../components/about/About'
import Works from '../../components/works/Works'
import Skills from '../../components/skills/Skills'
import Contact from '../../components/contact/Contact'

function Home() {
    return (
        <section className="homePageContent">
            <Header />
            <About />
            <Works />
            <Skills />
            <Contact />
        </section>
    )
}

export default Home