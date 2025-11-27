import './Taskers.css'
import Tips from '../Tips/Tips'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import FingerTips from '../FingerTips/FingerTips'
import Question from '../Question/Question'
import Started from '../Started/Started'
import Testimonial from '../Testimonial/Testimonial'
import Answered from '../Answered/Answered'
import Ready from '../Ready/Ready'
import Review from '../../pages/Review/Review'
import GetHelp from '../../pages/GetHelp/GetHelp'
import Monyform from '../Monyform/Monyform'

const Taskers=()=>{
  return(
    <>
        <Navbar/>
        <Tips/>
        <Monyform/>
        <FingerTips/>
        <Question/>
        <Started/>
        <Testimonial/>
        <Answered/>
        <Ready/>
        <Review/>
        <GetHelp/>
        <Footer/>
        
    </>
  )
}
export default Taskers