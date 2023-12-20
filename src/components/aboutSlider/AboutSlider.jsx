import './aboutSlider.css'

import Bubble from '../bubble/Bubble'
import Square from '../square/Square'


import mainFront from '../../assets/front.webp'
import frontPicture1 from '../../assets/html.png'
import frontPicture2 from '../../assets/css.png'
import frontPicture3 from '../../assets/js.png'
import frontPicture4 from '../../assets/sass.png'
import frontPicture5 from '../../assets/react.png'
import mainBack from '../../assets/back.webp'
import backPicture1 from '../../assets/node1.png'
import backPicture2 from '../../assets/express.png'
import backPicture3 from '../../assets/mongo.png'
import mainSeo from '../../assets/seo.webp'
import seoPicture1 from '../../assets/metrics.png'
import seoPicture2 from '../../assets/lighthouse.png'
import seoPicture3 from '../../assets/analytics.png'




function AboutSlider() {
    return (
        <aside className='sliderWrapper'>
            <div className='skillsWrapper'>
                <div className='itemBox'>
                    <h2 className='skillTitle'>Front-end</h2>
                    <div className='imagesWrapper front'>
                        <img className='mainPic' src={mainFront} alt="editeur de code" />
                        <div className="iconsWrapper">
                            <Bubble
                                picture={frontPicture1}
                                type={'html'}
                                alt={'Logo html'}
                            />
                            <Bubble
                                picture={frontPicture2}
                                type={'css'}
                                alt='Logo css'
                            />
                            <Square
                                picture={frontPicture3}
                                type='js'
                                alt='logo JavaScript'
                            />
                            <Bubble
                                picture={frontPicture5}
                                type='react'
                                alt='Logo React'
                            />
                            <Square
                                picture={frontPicture4}
                                type='sass'
                                alt='logo sass'
                            />
                        </div>
                    </div>
                </div>

                <div className='itemBox'>
                    <h2 className='skillTitle'>Back-end</h2>
                    <div className='imagesWrapper back'>
                        <img className='mainPic' src={mainBack} alt="editeur de code" />
                        <div className="iconsWrapper">
                            <Bubble
                                picture={backPicture1}
                                type='node'
                                alt='Logo node.js'
                            />
                            <Square
                                picture={backPicture2}
                                type='express'
                                alt='Logo express'
                            />
                            <Square
                                picture={backPicture3}
                                type='js'
                                alt='logo Mongo DB'
                            />
                        </div>
                    </div>
                </div>

                <div className='itemBox'>
                    <h2 className='skillTitle'>Optimisation performance et SEO</h2>
                    <div className='imagesWrapper seo'>
                        <img className='mainPic' src={mainSeo} alt="editeur de code" />
                        <div className="iconsWrapper">
                            <Square
                                picture={seoPicture1}
                                type='metrics'
                                alt='Logo GT metrics'
                            />
                            <Bubble
                                picture={seoPicture2}
                                type='lighthouse'
                                alt='logo Google Lighthouse'
                            />
                            <Square
                                picture={seoPicture3}
                                type='analytics'
                                alt='logo google'
                            />
                        </div>
                    </div>
                </div>

                <div className='itemBox'>
                    <h2 className='skillTitle'>Front-end</h2>
                    <div className='imagesWrapper front'>
                        <img className='mainPic' src={mainFront} alt="editeur de code" />
                        <div className="iconsWrapper">
                            <Bubble
                                picture={frontPicture1}
                                type={'html'}
                                alt={'Logo html'}
                            />
                            <Bubble
                                picture={frontPicture2}
                                type={'css'}
                                alt='Logo css'
                            />
                            <Square
                                picture={frontPicture3}
                                type='js'
                                alt='logo JavaScript'
                            />
                            <Bubble
                                picture={frontPicture5}
                                type='react'
                                alt='Logo React'
                            />
                            <Square
                                picture={frontPicture4}
                                type='sass'
                                alt='logo sass'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default AboutSlider