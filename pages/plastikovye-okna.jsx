import React from 'react'
import LayOut from '../components/layout/LayOut'
import Banner from '../components/PlastikWindowPage/Banner'
import DurabilitySafety from '../components/PlastikWindowPage/DurabilitySafety/DurabilitySafety'
import EnergySave from '../components/PlastikWindowPage/EnergySave/EnergySave'
import Production from '../components/PlastikWindowPage/Production'
import SoundIsolation from '../components/PlastikWindowPage/SoundIsolation/SoundIsolation'
import WhyChoose from '../components/PlastikWindowPage/WhyChoose'
import QuizContainer from '../components/Quiz/QuizContainer'

function plastikovyeOkna() {
    return (
        <LayOut>
            <Banner />
            <WhyChoose />
            <EnergySave />
            <SoundIsolation />
            <DurabilitySafety />
            <Production />
        </LayOut>
    )
}

export default plastikovyeOkna
