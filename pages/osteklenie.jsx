import LayOut from "../components/layout/LayOut";
import Banner from "../components/OstekleniePage/Banner";
import Experience from "../components/OstekleniePage/Experience";
import Question from "../components/OstekleniePage/Question";
import WhereToApply from "../components/OstekleniePage/WhereToApply";
import Advanteges from "../components/UI/Advanteges/Advanteges";


const advantagesArr = [
    {
        title: 'Все в одном месте',
        description: 'Наш штат сотрудников позволяет заниматься замером, монтажом и производством окон, не прибегая к услугам сторонних компаний и частных лиц',
        number: '01',
        image: '/images/installWindowPage/advantages/image1.png',
        textWidth: '261px'
    },
    {
        title: 'Удобное время монтажа. Быстро, качественно и чисто',
        description: 'Мы составили для наших сотрудников оптимальный график работы, позволяющий проводить замер и установку окон в удобное для вас время',
        number: '02',
        image: '/images/woodsWindow/advantegesWoods/image2.png',

    },
    {
        title: 'Бесплатный замер и расчеты',
        description: 'Наши сотрудники бесплатно проконсультируют, сделают замер будущего окна и рассчитают полную стоимость работ и материалов',
        number: '03',
        image: '/images/installWindowPage/advantages/image3.png',
        stretch: true,
        right: true,
        stretchHeight: '533px',
        colorNumber: 'white',
        colorStrech: '#f6f6f6',
        textWidth: '320px'
    },
    {
        title: 'Лучшие рекомендации',
        description: 'По статистике все наши клиенты возвращаются именно к нам за установкой остальных окон, а также рекомендуют нас своим друзьям и знакомым',
        number: '04',
        image: '/images/installWindowPage/advantages/image4.png',
        colorStrech: '#ffd138',
        stretch: true,
        colorNumber: '#fee180',
        paddingTop: '20px',
        textWidth: '240px'
    },
    {
        title: 'Большой выбор',
        description: 'У нас самый большой большой выбор оконных систем любых форм, цветов и материало',
        number: '05',
        image: '/images/installWindowPage/advantages/image5.png',
        colorNumber: '#444862',
        colorBask: '#343a4f',
        colorText: 'white',
        paddingTop: '20px',
        imageBottom: '-20px'
    },
    {
        title: 'Собственное производство',
        description: 'Мы самостоятельно изготавливаем оконные конструкции и можем гарантировать их качество и надежность',
        number: '06',
        image: '/images/installWindowPage/advantages/image6.png',
        stretch: true,
        right: true,
        colorText: 'white',
        colorStrech: '#202336',
        colorNumber: '#30334b',
        paddingTop: '20px',
        textWidth: '296px'
    },
]


function osteklenie() {

    return (
        <LayOut title='Остекление'>
            <Banner />
            <Question />
            <WhereToApply />
            <Experience />
            <Advanteges advantagesArr={advantagesArr}>
                <h2>ПРЕИМУЩЕСТВА<span className='red-text'> ОКОННЫХ</span><br />КОНСТРУКЦИЙ ОТ «ПАНОРАМА»</h2>
            </Advanteges>
        </LayOut>
    )
}

export default osteklenie;
