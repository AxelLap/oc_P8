import './home.css'
import Header from '../../components/header/Header'
import About from '../../components/about/About'
import Works from '../../components/works/Works'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'

function Home() {
    return (
        <section className="homePageContent">
            <Header />
            <About />
            <Works />
            <Contact />
            <Footer />
        </section>
    )
}

export default Home