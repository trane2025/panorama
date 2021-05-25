import About from "../components/HomePage/About";
import Banner from "../components/HomePage/Banner";
import HardСhoice from "../components/HomePage/HardСhoice";
import Offer from "../components/HomePage/Offer";
import ProfessionalWorks from "../components/HomePage/ProfessionalWorks";
import WhyChangeWindows from "../components/HomePage/WhyChangeWindows";
import LayOut from "../components/layout/LayOut";
import MainContainer from "../components/UI/MainContainer";




const HomePage = () => {
  return (
    <MainContainer>
      <LayOut title={'Главная'}>
        <Banner />
        <WhyChangeWindows />
        <HardСhoice />
        <ProfessionalWorks />
        <Offer />
        <About />
      </LayOut>
    </MainContainer>

  )
}

export default HomePage