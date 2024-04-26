import { Link } from 'react-router-dom';
import errorimg from '../assets/images/2376754.png'
const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center flex-col h-screen'>
                <img className='md:w-2/6 w-4/6' src={errorimg} alt="" />
                <h2 className='md:text-4xl text-3xl font-bold text-forth'>Page Not Found!!</h2>
                <Link to={'/'}>
                <button className='btn flex gap-1 text-base items-center border border-secondary rounded-none bg-secondary text-forth font-bold hover:bg-inherit hover:border-secondary mt-6'>Back To Home </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;