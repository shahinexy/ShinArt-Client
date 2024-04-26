import SingleCard from "./SingleCard";

const CraftItems = () => {
    return (
        <div>
            <div className="md:w-2/3 mx-auto text-center my-10 space-y-4 text-forth">
                <h1 className="md:text-4xl text-3xl">Craft Items Section</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum distinctio iusto neque dolorem molestiae quos ullam soluta velit incidunt praesentium quo expedita impedit, veniam, reiciendis cupiditate sequi id hic ipsa?</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5">
                <SingleCard></SingleCard>
            </div>
        </div>
    );
};

export default CraftItems;