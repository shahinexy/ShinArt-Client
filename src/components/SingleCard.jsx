import { FaAngleRight, FaRegStar } from 'react-icons/fa';
import img from '../assets/images/2149064430.jpg'
const SingleCard = () => {
    return (
        <div>
            <div className="border border-secondary p-3 text-forth space-y-3 shadow-lg shadow-secondary">
                <img className='w-full h-56' src={img} alt="" />
                <h1 className='text-2xl font-semibold'>This is Title</h1>
                <div className='flex justify-between'>
                    <p className='font-bold'>Price: 20$</p>
                    <p className='bg-secondary px-2'>Subcategory Name</p>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, labore. Nam qui asperiores ullam veritatis.</p>
                <div className='flex justify-between'>
                    <button className='btn flex gap-1 text-base items-center border border-secondary rounded-none bg-secondary text-forth font-bold hover:bg-inherit hover:border-secondary'>Details <FaAngleRight></FaAngleRight> </button>
                    <p className='flex gap-2 items-center'>4.5 <FaRegStar></FaRegStar></p>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;