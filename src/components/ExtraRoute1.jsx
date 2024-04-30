import { HiOutlineLightBulb } from 'react-icons/hi';
import img1 from '../assets/images/2149064430.jpg'
import { FaCottonBureau, FaDeezer } from 'react-icons/fa';
import { IoColorPaletteOutline } from 'react-icons/io5';

const ExtraRoute1 = () => {
    return (
        <div className="lg:flex text-forth md:my-32 my-8">
            <div data-aos="zoom-out-left" className="flex-1">
                <img className='w-full h-full' src={img1} alt="" />
            </div>
            <div data-aos="zoom-out-right" data-aos-delay="200" className='flex-1 bg-third md:px-32 px-5 py-8'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
                    <div className='space-y-4'>
                        <p className='text-5xl'><HiOutlineLightBulb></HiOutlineLightBulb></p>
                        <h3 className='text-2xl font-bold'>NEW IDEAS</h3>
                        <p>Unlock creativity with our collection, curated to inspire innovation and ignite imagination in every aspect of life.</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-5xl'><FaDeezer></FaDeezer></p>
                        <h3 className='text-2xl font-bold'>PASSION-DRIVEN</h3>
                        <p>Embark on a journey fueled by passion with our collection, where every piece is crafted with dedication and love to inspire and empower.</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-5xl'><FaCottonBureau></FaCottonBureau></p>
                        <h3 className='text-2xl font-bold'>ORGANIC</h3>
                        <p>Indulge in the essence of nature with our organic-inspired collection, where each item is crafted with care to bring a touch of natural beauty into your life.</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-5xl'><IoColorPaletteOutline></IoColorPaletteOutline></p>
                        <h3 className='text-2xl font-bold'>VIVID COLORS</h3>
                        <p>Experience a burst of vibrancy with our collection, where every hue is carefully selected to infuse joy and energy into your world.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraRoute1;