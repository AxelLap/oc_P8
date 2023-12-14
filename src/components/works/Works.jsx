import './works.css'
import sophie from '../../assets/p3/sophie.png'
import mvg from '../../assets/p7/mvg.png'
import kasa from '../../assets/p6/kasa3.png'
import gipe from '../../assets/gipecrea/gipe2.png'
import ScrollBtn from '../scrollbutton/ScrollBtn'

function Works() {
    return (

        <section className='worksSection'>
            <h2 className='workTitle'>Mes Projets</h2>

            <div className='worksContainer'>


                <figure className='work'>
                    <img src={sophie} alt="site d'architecte" className="workImg" />
                    <figcaption>Sophie Bluel - Architecte</figcaption>
                </figure>



                <figure className='work'>
                    <img src={mvg} alt="site de notation de livre" className="workImg" />
                    <figcaption>Mon Vieux Grimoire</figcaption>
                </figure>


            </div>

            <div className='worksContainer'>
                <figure className='work'>
                    <img src={kasa} alt="site de location de logements" className="workImg" />
                    <figcaption>Kasa - Location immobiliaire</figcaption>
                </figure>
                <figure className='work'>
                    <img src={gipe} alt="galerie d'artiste en ligne" className="workImg" />
                    <figcaption>GipéCréa - Galerie d'art</figcaption>
                </figure>
            </div>
            <ScrollBtn
                scrollValue={((window.innerHeight) * 0.9) * 2}
                type={'dropDownBtn'}
            />
        </section>
    )

}

export default Works