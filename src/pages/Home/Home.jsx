import Logo from "../Logo/Logo";
import Header from "../Header/Header";
import Review from "../Review/Review";
import Project from "../Project/Project";
import StarRating from "../StarRating/StarRating";
import Work from '../Work/Work'
import GetHelp from "../GetHelp/GetHelp";
import Guaranteed from "../Guaranteed/Guaranteed";
function Home()
{
    return(
        <>
        <Header/>
        <Logo/>
        <Review/>
        <Project/>
        <StarRating/>
        <Guaranteed/>
        <Work/>
        <GetHelp/>
        
        </>
    )
}
export default Home;