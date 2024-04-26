import SingleCard from "./SingleCard";
import PropTypes from 'prop-types';

const CraftItems = ({allItems}) => {
    return (
        <div>
            <div className="md:w-2/3 mx-auto text-center my-10 space-y-4 text-forth">
                <h1 className="md:text-4xl text-3xl font-semibold">Craft Items Section</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum distinctio iusto neque dolorem molestiae quos ullam soluta velit incidunt praesentium quo expedita impedit, veniam, reiciendis cupiditate sequi id hic ipsa?</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 my-5">
                {
                    allItems.map(item => <SingleCard key={item._id} item={item}></SingleCard>)
                }
            </div>
        </div>
    );
};

CraftItems.propTypes={
    allItems: PropTypes.array.isRequired
}

export default CraftItems;