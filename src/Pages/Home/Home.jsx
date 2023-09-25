import { useLoaderData } from "react-router-dom";
import Banner from "./Banner"
import ShowProducts from "../../Components/ShowProducts";
import About from "../About/About";

const Home = () => {
    const sunglasses = useLoaderData();
    return (
        <>
            <Banner />
            <ShowProducts name={'Top rated'} sunglasses={sunglasses.slice(5, 10)} />
            <ShowProducts name={'Best sellers'} sunglasses={sunglasses.slice(0, 5)} />
            <About />
        </>
    );
};

export default Home;