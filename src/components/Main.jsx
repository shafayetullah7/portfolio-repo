import About from "./About";
import Banner from "./Banner";
import Nav from "./Nav";
import Services from "./Services";

const Main = () => {
    return (
        <div className="text-dark2">
            <Nav></Nav>
            <Banner></Banner>
            <div className="bg-dark1 text-gray-200">
                <About></About>
                <Services></Services>
            </div>
        </div>
    );
};

export default Main;