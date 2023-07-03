import About from "./About";
import Banner from "./Banner";
import Nav from "./Nav";
import Services from "./Services";
import Techs from "./Techs";

const Main = () => {
    return (
        <div className="text-dark2">
            <Nav></Nav>
            <Banner></Banner>
            <div className="bg-dark1 text-gray-200 lg:py-24">
                <div id="about">
                    <About></About>
                </div>
                <div id="services">
                    <Services></Services>
                </div>
            </div>
            <div>
                <Techs></Techs>
            </div>
        </div>
    );
};

export default Main;