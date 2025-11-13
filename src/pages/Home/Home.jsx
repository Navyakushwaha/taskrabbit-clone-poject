import Logo from "../Logo/Logo";
import Header from "../Header/Header";
import Review from "../Review/Review";
import Project from "../Project/Project";
import StarRating from "../StarRating/StarRating";
function Home()
{
    return(
        <>
        <Header/>
        <Logo/>
        <Review/>
        <Project/>
        <StarRating/>
        </>
    )
}
export default Home;