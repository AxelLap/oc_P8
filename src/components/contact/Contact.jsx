import './contact.css'
import profilePic from '../../assets/black.jpg'
import Tools from '../tools/Tools'
import Footer from '../footer/Footer'


import ScrollBtn from '../scrollbutton/ScrollBtn'

function Contact() {
    return (

        <section className="introducing">

            <section className='introduceWrapper'>
                <img src={profilePic} className='profile' alt='Axel Laplace' />
                <div className="profileContainer">
                    <h2 className='intrduceTitle'>À propos</h2>
                    <aside className="introduceText">Développeur web junior suite à une reconversion professionnelle. Je suis passionné de technologie et possède de solides connaissances aussi bien en frontend qu'en backend.<br></br> Formé aux méthodes agiles et au SCRUM je saurais mettre mon experience et ma créativité au service de votre entreprise.<br></br>
                        <Tools />
                    </aside>
                </div>
            </section>
            <section className='contactSection'>
                <h2 className='contactTitle'>Mes contacts</h2>
                <div className='contactContent'>
                    <p className='contactText'>Un projet ? Besoin d'un nouveau membre au sein de votre équipe ? <a className='emailLink' href='mailto:axellaplace.dev@gmail.com'>Envoyez moi un mail !</a></p>
                    <div className="networkWrapper">
                        <p className='contactText text2'>Ou contactez moi sur mes réseaux sociaux :</p>
                        <div className='networkContainer'>
                            <a href='https://www.linkedin.com/in/axel-laplace-48b2412a5/' target='_blank' rel="noreferrer"><div className='linkLogo'>  <i class="fa-brands fa-linkedin-in"></i></div></a>
                            <a href='https://twitter.com/laplace_axel' target='_blank' rel="noreferrer"><div className='linkLogo'> <i className="fa-brands fa-x-twitter" ></i>   </div></a>
                        </div>
                    </div>

                </div>

            </section>
            <ScrollBtn
                scrollValue={0}
                type={'dropDownBtn returnOnTop'}
            />
            <div className="anchor" id='contacts'></div>
            <Footer />
        </section>

    )
}

export default Contact