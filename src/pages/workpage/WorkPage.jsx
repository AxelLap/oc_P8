import './workPage.css'

import { useParams } from "react-router-dom"

import { worksContent } from "../../datas/worksContent";

import { Link } from 'react-router-dom';

import { useState } from 'react';

function WorkPage() {
    const { id } = useParams();

    const currentWork = worksContent.find((work) => work.id === id)
    const images = currentWork.images;
    const skills = currentWork.skills;

    const [count, setCount] = useState(1);
    const [index, setIndex] = useState(0);
    const total = images.length

    const handleSwipeRight = () => {
        setCount(count !== total ? count + 1 : 1)

        setIndex(index !== (total - 1) ? index + 1 : 0)
    }

    const handleSwipeLeft = () => {
        setIndex(index !== 0 ? index - 1 : (total - 1))
        setCount(count !== 1 ? count - 1 : total)
    }
    console.log(images)
    return (
        <>
            <header>
                <ul>
                    <li>
                        <Link className='navItem' to={"/work/gipecrea"}>
                            GipéCréa
                        </Link>
                        <div className="line"></div>
                    </li>
                    <li>
                        <Link className='navItem' to={"/work/sophie"}>
                            Sophie Bluel
                        </Link>
                        <div className="line"></div>
                    </li>
                    <li>
                        <Link className='navItem' to={"/work/kasa"}>
                            Kasa
                        </Link>
                        <div className="line"></div>
                    </li>
                    <li>
                        <Link className='navItem' to={"/work/mvg"}>
                            Mon Vieux Grimmoire
                        </Link>
                        <div className="line"></div>
                    </li>
                </ul>
            </header>
            <section className="workPageSection">
                <div className="titleContainer">
                    <h2 className='currentWorkTitle'>{currentWork.title}</h2>
                    <Link to={"/"} className='return'>Retour à l'acceuil</Link >
                </div>
                <p className='workDescription'>{currentWork.description}</p>
                <div className="workSlider">
                    <button onClick={handleSwipeLeft} className='dropDownBtn leftChevron'><div className='dropDownLink'><i className="fa-solid fa-chevron-down" aria-hidden="true"></i></div></button>

                    <img className="sliderImg" src={images[index]} alt={`ìmage du site ${currentWork.title}`} />

                    <button onClick={handleSwipeRight} className='dropDownBtn rightChevron'><div className='dropDownLink'><i className="fa-solid fa-chevron-down" aria-hidden="true"></i></div></button>
                </div>
                <div className="counter">
                    <span>{count}/{total}</span>
                </div>
                <div className="workSkillsContainer">
                    <h3>Compétences et technos</h3>
                    <ul className="workSkillsList">
                        {skills.map((skill) => (
                            <li className="workSkill">{skill}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default WorkPage