import Footer from "../../component/footer";
import Header from "../../component/header";
import Home1 from "../../component/home_comp/home_1";
import Home2 from "../../component/home_comp/home_2";
import Home3 from "../../component/home_comp/home_3";

const HomePage=()=>{
    return(

        <div>
            <Header />
            <Home1 />
            <Home2 />
            <Home3 />
            <Footer />
        </div>
    )
}
export default HomePage;