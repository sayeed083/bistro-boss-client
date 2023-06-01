

const OrderCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="card w-96 glass">
            <figure><img src={image} alt="car!" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;