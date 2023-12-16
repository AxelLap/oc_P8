import './works.css'
import Work from '../work/Work'
// import sophie from '../../assets/p3/sophie.png'
// import mvg from '../../assets/p7/mvg.png'
// import kasa from '../../assets/p6/kasa3.png'
// import gipe from '../../assets/gipecrea/gipe2.png'
import ScrollBtn from '../scrollbutton/ScrollBtn'


import { workList } from '../../datas/workList'


function Works() {
    return (

        <section className='worksSection'>
            <h2 className='workTitle'>Mes Projets</h2>

            <div className='worksContainer'>


                {workList.map((work) => (
                    <Work
                        key={work.id}
                        id={work.id}
                        image={work.image}
                        title={work.title}
                    />
                ))}

            </div>
            <ScrollBtn
                scrollValue={((window.innerHeight) * 0.9) * 2}
                type={'dropDownBtn'}
            />
        </section>
    )

}

export default Works