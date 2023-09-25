import { useLoaderData, } from "react-router-dom";
import ShowProducts from "../../Components/ShowProducts";

const Products = () => {

    const sunglasses = useLoaderData();
    return (
        <>
            <img src="https://i.ibb.co/4Fm9MgB/image.png" alt="" />

            <ShowProducts name={'Featured Products'} sunglasses={sunglasses} />
        </>
    );
};

export default Products;