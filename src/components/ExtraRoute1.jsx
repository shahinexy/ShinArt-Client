import { HiOutlineLightBulb } from 'react-icons/hi';
import img1 from '../assets/images/2149064430.jpg'
import { FaCottonBureau, FaDeezer } from 'react-icons/fa';
import { IoColorPaletteOutline } from 'react-icons/io5';

const ExtraRoute1 = () => {
    return (
        <div className="lg:flex text-forth md:my-32 my-8">
            <div className="flex-1">
                <img className='w-full h-full' src={img1} alt="" />
            </div>
            <div className='flex-1 bg-third md:px-32 px-5 py-8'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
                    <div className='space-y-4'>
                        <p className='text-5xl'><HiOutlineLightBulb></HiOutlineLightBulb></p>
                        <h3 className='text-2xl font-bold'>NEW IDEAS</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ratione omnis quidem saepe qui assumenda?</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-5xl'><FaDeezer></FaDeezer></p>
                        <h3 className='text-2xl font-bold'>PASSION-DRIVEN</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ratione omnis quidem saepe qui assumenda?</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-5xl'><FaCottonBureau></FaCottonBureau></p>
                        <h3 className='text-2xl font-bold'>ORGANIC</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ratione omnis quidem saepe qui assumenda?</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-5xl'><IoColorPaletteOutline></IoColorPaletteOutline></p>
                        <h3 className='text-2xl font-bold'>VIVID COLORS</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ratione omnis quidem saepe qui assumenda?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraRoute1;