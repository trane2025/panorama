import { useEffect, useState } from 'react';
import Reviews from './Reviews';
import PopUp from './UI/PopUp';

const reviewsInitial = [

    {
        name: 'Елена Крылова',
        comment: 'Стоят окна от Панорамы в частном доме, в 5-ти комнатной квартире свекрови, в двушке на Бабаевского, в однушке на Ужгородской, в двушке на Зелёной, в коттедже в Карагалях, и во всех квартирах родственников и знакомых, в том числе в коттеджах! Окна верх всех похвал, проверено десятилетием.',
        from: '2 GIS',
        link: 'https://go.2gis.com/djt1gk',
        color: '#ec407a',
        count: 5,
        date: '3 декабря 2020'
    },

    {
        name: 'Елена Отмани',
        comment: 'Три года назад, заказывала в "Панораме", окна и остекление балкона По истечению этого времени, в очередной раз хочу выразить свою Благодарность: Руководителю 🤲🌹🤝за слаженную, профессиональную организацию всей команды 👌👌,Менеджерам Анне и Дарье за внимание, помощь в выборе заказа, доброжелательность, это общение осталось в сердце 🤲🌹🌹🌹❤️🤲. .. Виктору, Владиславу, Муслиму Сергеевичу и ВСЕМ РЕБЯТАМ которые выполняли работу по установке окон.... Такая окуратность в работе, педантичность, пунктуальность, вежливость и КАЧЕСТВО! Так Красиво работать могут не многие!! Тем более приятно, что в нашем городе есть такая команда профессионалов👌 Всем РЕКОМЕНДУЮ эту компанию... все четко - качественно если одним словом классная работа! Меня, мои окна Радуют каждый день ...и сейчас, прошло уже столько времени, а они как новые👌 Благодарю! 🤲🌹🤝 и непременно продолжу сотрудничество только с Вами ребята, на днях приду ууу .. теперь нужна дверь 😊',
        from: 'Google',
        link: 'https://www.google.com/search?tbm=lcl&ei=UmGyX7TYDOP4qwG_3otQ&q=%D0%BE%D0%BA%D0%BD%D0%B0+%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0+%D0%B0%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%8C&oq=%D0%BE%D0%BA%D0%BD%D0%B0+%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0+%D0%B0%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%8C&gs_l=psy-ab.12...0.0.0.57538.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.7mGBoLNQtaAlrd=0x41a905142f5dea75:0x7b35ade4a44828c6,1,,,&rlfi=hd:;si:8878193437951142086,l,CizQvtC60L3QsCDQv9Cw0L3QvtGA0LDQvNCwINCw0YHRgtGA0LDRhdCw0L3RjCIDiAEBWkkKGdC-0LrQvdCwINC_0LDQvdC-0YDQsNC80LAiLNC-0LrQvdCwINC_0LDQvdC-0YDQsNC80LAg0LDRgdGC0YDQsNGF0LDQvdGM;mv:[[46.3461937,48.069102199999996],[46.312843699999995,48.021444699999996]]',
        color: '#7b1fa2',
        count: 4.8,
        date: '10 декабря 2020'
    },


    {
        name: 'Вячеслав Тамбовцев',
        comment: 'Хочу поблагодарить вашу компанию за проделанную работу! Заказываем у вас пластиковые окна уже третий раз начиная с 2013 года. Очень довольны качеством исполнения конструкций и качеством монтажа! Последний наш заказ был в сентябре(монтаж-09.09.2020). Со временем во многих компаниях качество изготовления и особенно монтажа падает в разы,но это не про вашу компанию. Время показывает,что ваша команда работает всегда на уровне профессионалов,от замера до последующего сервиса после монтажа! Вы не бросаете своих клиентов после выполнения условий договора,а это очень важно.Огромное спасибо девочкам-менеджерам, замерщику,который всё объяснил и аргументировал,и предложил,ребятам монтажникам,делают все слаженно и профессионально, вообщем как для себя и конечно же руководителю Валерию за четкий и грамотный подход к делу!Каждый в команде делает свое дело!',
        from: '2 GIS',
        link: 'https://go.2gis.com/djt1gk',
        color: 'blue',
        count: 5,
        date: '29 октября 2020'
    },
    {
        name: 'De La Somnia93',
        comment: '11 сентября нам было установлено окно. Вместо установленного срока по установке, сделали все гораздо раньше. Остались довольны проведенным качеством работ. Выражаем благодарность всем сотрудникам компании "Панорама", а именно монтажникам Константину и Алексею, а также менеджеру Пономаревой А.С. за внимательное отношение к клиентам и за подсказку в подборе материалов. Возможно обратимся ещё раз и будем советовать близким и знакомым сотрудничать с Вами!',
        from: '2 GIS',
        link: 'https://go.2gis.com/djt1gk',
        color: '#f5511e',
        count: 5,
        date: '11 сентября 2020'
    },
    {
        name: 'Полина Сергеева',
        comment: 'Хочу выразить свою благодарность мастерам-монтажникам Юсову Сергею и Чернову Валерию, за добросовестное отношение к работе, профессионализм и чуткость к клиентам!!! А так же всему коллективу компании «Панорама»! Спасибо вам огромное, процветания Вам!!! Мы очень-очень довольны, рекомендую всем!!!',
        from: '2 GIS',
        link: 'https://go.2gis.com/djt1gk',
        color: '#ec407a',
        count: 5,
        date: '9 сентября 2020'
    },
]

function ReviewsContainer() {



    const [reviews, setReviews] = useState([]);
    const [popUp, setPopUp] = useState(false)

    useEffect(() => {
        setReviews(reviewsInitial)
    }, []);




    return (
        <>
            {popUp && <PopUp setPopUp={setPopUp} />}
            {reviews.length !== 0 && <Reviews reviews={reviewsInitial} setPopUp={setPopUp} />}
        </>

    )
}

export default ReviewsContainer;


