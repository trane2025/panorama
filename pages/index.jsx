import Banner from "../components/HomePage/Banner";
import HardСhoice from "../components/HomePage/HardСhoice";
import Offer from "../components/HomePage/Offer";
import ProfessionalWorks from "../components/HomePage/ProfessionalWorks";
import WhyChangeWindows from "../components/HomePage/WhyChangeWindows";
import LayOut from "../components/layout/LayOut";




const HomePage = () => {
  return (
    <LayOut title={'Главная'}>
      <Banner />
      <WhyChangeWindows />
      <HardСhoice />
      <ProfessionalWorks />
      <Offer />
    </LayOut>
  )
}

export default HomePage