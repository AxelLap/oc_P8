import './contact.css'
import profilePic from '../../assets/black.jpg'
import Tools from '../tools/Tools'
import x from '../../assets/x.png'
import link from '../../assets/in.png'
import ScrollBtn from '../scrollbutton/ScrollBtn'

function Contact() {
    return (

        <section className="introducing">
            <h2 className='intrduceTitle'>À propos</h2>
            <section className="profileContainer">
                <img src={profilePic} className='profile' />
                <aside className="introduceText">Développeur web junior suite à une reconversion professionnelle. Je suis passionné de technologie et possède de solides connaissances aussi bien en frontend qu'en backend.<br></br> Formé aux méthodes agiles et au SCRUM je saurais mettre mon experience et ma créativité au service de votre entreprise.<br></br>
                    <Tools />
                </aside>
            </section>
            <section className='contactSection'>
                <h2>Mes contacts</h2>
                <div className='contactContent'>

                    <div className='linkLogo'> <img className='logoContacts' src={link} alt="" /> </div>
                    <div className='linkLogo'> <img className='logoContacts' src={x} alt="" />  </div>
                    <p>Un projet ? Besoin d'un nouveau memebre au sein de votre équipe ? <a className='emailLink'>Envoyez moi un mail !</a></p>
                    <ScrollBtn
                        scrollValue={0}
                        type={'dropDownBtn returnOnTop'}
                    />
                </div>

            </section>
        </section>

    )
}

export default Contact