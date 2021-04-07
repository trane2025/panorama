import Head from 'next/head';
import { useEffect, useState } from 'react';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import OrderForm from '../OrderForm/OrderForm';
import PortfolioContainer from '../Portfolio/PortfolioContainer';
import QuizContainer from '../Quiz/QuizContainer';
import ReviewsContainer from '../Reviews/ReviewsContainer';

const links = [
    {
        title: 'Главная',
        url: '/'
    },
    {
        title: 'Остекление',
        url: '/'
    },
    {
        title: 'Деревянные окна',
        url: '/'
    },
    {
        title: 'Пластиковые окна',
        url: '/plastikovye-okna'
    },
    {
        title: 'Алюминиевые конструкции',
        url: '/'
    },
    {
        title: 'Жалюзи / Рольшторы',
        url: '/'
    }
]

const geolocation = {
    Astrakhan: {
        mobilePhone: '+7 (927) 554 02 36',
        phone: '+7 (8512) 24 25 25',
        address: 'Ул. Н. Островского, д. 115 к. 1',
        title: 'Астрахань'
    },
    Atirau: {
        mobilePhone: '+7 (775) 656-23-11',
        phone: '+7 (7122) 76-35-80',
        address: 'ул. Атамбаева, 77А',
        title: 'Атырау'
    }
}

const KEY_STORAGE = 'geolocation';

function LayOut({ title = 'Панорама', description, children }) {

    const [optionGeolocation, setOptionGeolocation] = useState('');

    useEffect(() => {
        const geolocation = localStorage.getItem(KEY_STORAGE);

        if (!geolocation) {
            localStorage.setItem(KEY_STORAGE, 'Astrakhan');
            setOptionGeolocation('Astrakhan')
        }
        else setOptionGeolocation(geolocation)

    }, [])

    const onchangeOption = (event) => {
        setOptionGeolocation(event.target.value);
        localStorage.setItem(KEY_STORAGE, event.target.value)
    }

    return (
        <div>
            <Head>
                <title>{`${title}`}</title>
                <meta name="description" content={description} />
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"></link>
            </Head>

            <Navigation
                links={links}
                optionValue={optionGeolocation}
                onchangeOption={onchangeOption}
                objGeolocation={optionGeolocation && geolocation[optionGeolocation]} />

            {children}
            <PortfolioContainer />
            <QuizContainer />
            <ReviewsContainer />
            <OrderForm />
            <Contacts objGeolocation={optionGeolocation && geolocation[optionGeolocation]} />
            <Footer links={links} objGeolocation={optionGeolocation && geolocation[optionGeolocation]} />
        </div>
    )
}

export default LayOut
