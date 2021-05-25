import styled from 'styled-components'

import Container from '../UI/Container'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import ProgresBar from './UI/ProgresBar';

function Quiz({
    page,
    setCheckBoxPage1,
    changePage,
    activePage,
    changeRadioPage2,
    chekedMaterial,
    page3,
    selects,
    changeSelectPage3,
    dataQuiz,
    progresBar,
    changeProgresBar }) {


    return (
        <BackGround id='quiz'>
            <Container>

                <WraperQuiz>
                    {activePage !== 'page5' &&
                        <>
                            <h2>Узнайте стоимость <span className='red-text'>вашего окна</span></h2>
                            <DescriptionQuiz>Ответьте на несколько вопросов и наш менеджер сообщит <br /> Вам итоговую стоимость <span className='black-text'>в течение 30 минут</span></DescriptionQuiz>
                            <ProgresBar progresBar={progresBar} />
                        </>}
                    {activePage === 'page1' &&
                        <Page1
                            title={page.title}
                            items={page.items}
                            setCheckBox={setCheckBoxPage1}
                            changePage={changePage}
                            changeProgresBar={changeProgresBar} />}

                    {activePage === 'page2' &&
                        <Page2
                            title={page.title}
                            items={page.items}
                            changeRadio={changeRadioPage2}
                            changePage={changePage}
                            changeProgresBar={changeProgresBar} />}

                    {activePage === 'page3' &&
                        <Page3
                            changePage={changePage}
                            items={page3[chekedMaterial].items}
                            title={page3[chekedMaterial].title}
                            image={page3[chekedMaterial].image}
                            selects={selects}
                            changeSelect={changeSelectPage3}
                            changeProgresBar={changeProgresBar} />}

                    {activePage === 'page4' &&
                        <Page4
                            changePage={changePage}
                            dataQuiz={dataQuiz}
                            changeProgresBar={changeProgresBar} />}

                    {activePage === 'page5' && <Page5 />}

                </WraperQuiz>
            </Container>
        </BackGround>
    )
}

export default Quiz;





const WraperQuiz = styled.div`
    width: 100%;
    height: 711px;
    min-height: 711px;
    background-color: rgb(244, 244, 244);
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;

    h2 {
        margin-bottom: 15px;
    }

    p {
        
    }

    @media (max-width: 770px) {
        box-shadow: none;
        height: fit-content;
        min-height: initial;
        padding: 40px 0;

        h2 {
            width: 400px;
            text-align: center;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 480px) {

        h2 {
            width: 300px;
        }
    }
`;

const DescriptionQuiz = styled.p`
    text-align: center;
    font-size: 20px;

    @media (max-width: 670px) {
        font-size: 16px;
        width: 400px;
    }

    @media (max-width: 480px) {
        display: none;
    }
`;



const BackGround = styled.section`
    background: url('/images/quiz/background.jpg') no-repeat center center;
    padding: 60px 0;

    @media (max-width: 770px) {
        background: rgb(244, 244, 244);
        padding: 0;
    }

    
`;