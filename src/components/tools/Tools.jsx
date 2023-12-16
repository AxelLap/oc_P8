import './tools.css'
import Bubble from '../bubble/Bubble'
import Square from '../square/Square'
import vsc from '../../assets/vsc.png'
import notion from '../../assets/notion.png'
import docker from '../../assets/docker.png'
import trello from '../../assets/trello.png'

function Tools() {
    return (
        <div className="toolsContainer">

            <h3 className='tools'>Mes outils :</h3>
            <div className="toolsWrapper">
                <Bubble
                    picture={vsc}
                    alt={'logo visual studio code'}
                />
                <Square
                    picture={docker}
                    alt={'logo docker'}

                />
                <Bubble
                    picture={notion}
                    alt={'logo notion'}

                />
                <Square
                    picture={trello}
                    alt={'logo trello'}


                />
            </div>
        </div>
    )
}

export default Tools