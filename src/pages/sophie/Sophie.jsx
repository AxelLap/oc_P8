import './sophie.css'

import { sophieDataList } from '../../datas/sophieDataList'

function Sophie() {
    //const images = sophieDataList.sliderImages;
    const src1 = sophieDataList.image1;
    return (
        <div><p>kakak</p>
            <img src={`${src1}`} alt="truc" />
        </div>

    )
}
export default Sophie