import './contact.css'
import profilePic from '../../assets/black.jpg'
import x from '../../assets/x.png'
import link from '../../assets/in.png'
import ScrollBtn from '../scrollbutton/ScrollBtn'

function Contact() {
    return (

        <section className="introducing">
            <h2 className='intrduceTitle'>A propos</h2>
            <figure className="profileContainer">
                <img src={profilePic} className='profile' />
                <figcaption className="introduceText">Développeur web junior suite à une reconversion professionnelle. Je suis passionné de technologie et je possède de solides connaissances aussi bien en front-end qu'en backend. Formé aux méthodes agiles et au SCRUM je saurais mettre mon experience et ma créativité au service de votre entreprise.</figcaption>
            </figure>
            <section className='contactSection'>
                <h2>Mes contact</h2>
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