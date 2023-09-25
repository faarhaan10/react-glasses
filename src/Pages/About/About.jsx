import { TbRefresh } from 'react-icons/tb';
import { FaTruck } from 'react-icons/fa';
import { AiTwotoneLock } from 'react-icons/ai';

const About = () => {
    return (
        <>
            <div className="px-8 py-12 text-center">
                <h1 className="text-4xl font-bold">About us</h1>
                <p className="my-6 font-thin">
                    We understand that glasses are more than just a visual aid;
                    <br />
                    they are a reflection of your personality and a statement of your unique sense of style.
                </p>
                <div className="flex justify-center">
                    <img src="https://htmldemo.net/mandala/mandala/img/about-img.webp" alt="" />
                </div>
                <br />
                <hr />
                <br />
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="single-shipping">
                            <TbRefresh className='text-center font-bold text-5xl mx-auto' />
                            <h3>30 DAYS RETURN</h3>
                        </div>
                        <div className="single-shipping">
                            <FaTruck className='text-center font-bold text-5xl mx-auto' />
                            <h3>FREE SHIPPING</h3>
                        </div>
                        <div className="single-shipping">
                            <AiTwotoneLock className='text-center font-bold text-5xl mx-auto' />
                            <h3>SECURE PAYMENT</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default About;