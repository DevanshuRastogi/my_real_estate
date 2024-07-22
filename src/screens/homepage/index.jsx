import Footer from "../../component/footer";
import Header from "../../component/header";
import Home1 from "../../component/home_comp/home_1";
import Home2 from "../../component/home_comp/home_2";
import Home3 from "../../component/home_comp/home_3";
import Home4 from "../../component/home_comp/home_4";
import Home5 from "../../component/home_comp/home_5";

const HomePage=()=>{
    return(

        <div>
            <Header />
            <Home1 />
            <Home2 />
            <Home3 feature={true} />
            <Home4 />
            <Home5 />
            <Footer />
        </div>
    )
}
export default HomePage;