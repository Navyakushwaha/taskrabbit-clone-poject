import Navbar from "../../components/Navbar/Navbar";
import Logo from "../Logo/Logo";
import Header from "../Header/Header";
import Review from "../Review/Review";
import Project from "../Project/Project";
import StarRating from "../StarRating/StarRating";
import Work from '../Work/Work'
import GetHelp from "../GetHelp/GetHelp";
import Guaranteed from "../Guaranteed/Guaranteed";
import Footer from "../../components/Footer/Footer";
import Describe from "../../components/common/timelined/describe/Decribe";
import TaskForm from '../../components/common/taskform/TaskForm'
function Home()
{
    return(
        <>
        <Navbar/>
        <Header/>
        <Logo/>
        <Review/>
        <Project/>
        <StarRating/>
        <Guaranteed/>
        <Work/>
        <GetHelp/>
        <Footer/>
        <Describe/>
        <TaskForm/>
        </>
    )
}
export default Home;