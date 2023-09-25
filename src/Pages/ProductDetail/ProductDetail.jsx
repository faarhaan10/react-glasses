import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
    const sunglass = useLoaderData();

    return (
        <>
            <img src="https://capricathemes.com/opencart/OPC09/OPC090220/image/cache/catalog/main-banner-1-1903x680.jpg" alt="" />
            <div className="grid grid-cols-1 md:grid-cols-2 md:h-[680px]">

                <div className=" flex justify-center items-center bg-white">
                    <img src={sunglass.image} alt="" />
                </div>

                <div className=" bg-black text-white flex items-center">
                    <div className=" bg-black h-auto md:h-[90%] md:-ml-24  p-4">
                        <h1 className="text-5xl font-bold mb-8">{sunglass.name}</h1>
                        <p>{sunglass.description}</p>
                        <p>GKB Optical online store brings in the best assortment of sunglasses. You can get a sunglass based on your lifestyle, fashion and requirements. </p>

                        <h1 className="text-4xl font-bold my-4">${sunglass.price}</h1>
                        <br />
                        <button className="btn">Buy it now!</button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;